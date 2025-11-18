Alright, Vaibhav — let’s get you sharp and *interviewer-level* for MongoDB aggregation. I’ll keep this direct and practical so you can walk in confident.

---

## **1. Core Mindset Interviewers Look For**

An expert interviewer doesn’t just check if you can write a pipeline. They check whether you:

1. **Understand how pipelines flow** (each stage transforms the doc).
2. **Know when to use which stage**.
3. **Write efficient pipelines** (fewer stages, correct index usage).
4. **Avoid anti-patterns** (like unnecessary `$project`, `$unwind` misuse).
5. **Think aloud** (explain *why* you choose a stage).

---

## **2. The Must-Know Aggregation Stages**

You need to be fluent with these:

### **Filtering & Shaping**

* `$match`
* `$project`
* `$addFields`

### **Joins & Array Work**

* `$lookup`
* `$unwind`
* `$group`

### **Sorting & Pagination**

* `$sort`
* `$limit`
* `$skip`

### **Computed Values**

* `$sum`, `$count`, `$avg`, `$dateTrunc`, `$dateToString`

### **Performance**

* Use `$match` early.
* Use `$project` early to reduce doc size if possible.
* Use `$lookup` *carefully*.
* Create proper indexes on fields used in `$match`, `$lookup.localField`, `$sort`.

---

## **3. Quick Optimization Rules**

These impress interviewers:

### **Rule 1: `$match` → `$sort` → `$group`**

Always filter early.
Sorting before grouping reduces in-memory data size.

### **Rule 2: Avoid `$unwind` explosions**

If arrays are huge:

* add `preserveNullAndEmptyArrays: true`
* or filter before unwind with `$project` + `$filter`
* or use `$slice` to limit array explosion

### **Rule 3: When joining, prefer pipeline `$lookup`**

Gives better filtering efficiency.

---

## **4. Let’s Practice Like an Interviewer**

I’ll give you problems *exactly* how an expert interviewer would.

### **Question 1:**

You have a collection `orders`:

```json
{
  "_id": 1,
  "customerId": 101,
  "items": [
    { "product": "A", "qty": 2, "price": 200 },
    { "product": "B", "qty": 1, "price": 500 }
  ],
  "status": "delivered",
  "createdAt": ISODate("2023-12-01")
}
```

**Task:**
Find the **total revenue per customer** where total revenue is sum of `qty * price`.

**Your pipeline should be optimized.**

---

### **Question 2:**

There is `users` and `tasks` collections.

Each task has `{ userId, status, duration }`.

**Task:**
Return each user with:

* total tasks
* completed tasks
* total duration of completed tasks

With minimal `$lookup` work.

---

### **Question 3:**

Given a collection with millions of documents:

```json
{ "city": "NYC", "temp": 32, "day": ISODate("2024-05-12") }
```

**Task:**
Find average temp per month per city for last 12 months.
Explain how you would index it.

---

1️⃣ SCENARIO: Find High Value Customers

Dataset: users, orders

Your product team wants to know:

customers who placed at least 2 delivered orders

AND total order value (sum of qty * price) > ₹50,000

Return only: _id, name, totalSpent, totalOrders

❓ Write an optimized aggregation with early $match and reduced $unwind.


```json
db.orders.aggregate([
  {
    $match: { status: "delivered" }
  },
  {
    $addFields: {
      orderTotal: {
        $sum: {
          $map: {
            input: "$items",
            as: "i",
            in: { $multiply: ["$$i.qty", "$$i.price"] }
          }
        }
      }
    }
  },
  {
    $group: {
      _id: "$userId",
      totalSpent: { $sum: "$orderTotal" },
      totalOrders: { $sum: 1 }
    }
  },
  {
    $match: {
      totalOrders: { $gte: 2 },
      totalSpent: { $gt: 50000 }
    }
  },
  {
    $lookup: {
      from: "users",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$_id", "$$uid"] },
                { $eq: ["$role", "manager"] }
              ]
            }
          }
        }
      ],
      as: "user"
    }
  },
  { $unwind: "$user" }
]);

```

2️⃣ SCENARIO: Best Selling Product By Revenue

Dataset: orders, products

Management asks:

Which product generated the highest revenue in the last 30 days?

Also return category from products.

Revenue = sum of (qty * price) across all orders.

❓ Write pipeline + explain which indexes are required.
```json
db.orders.aggregate([
  {
    // Uses index on createdAt
    $match: {
      createdAt: {
        $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      }
    }
  },
  {
      $addFields: {
          itemRevenues :{
              $map: {
                input: "$items",
                as: "i",
                in: { 
                   product: "$$i.product",
                   revenue: { $multiply: ["$$i.qty", "$$i.price"] }
                }
              }
          }
      }
  },
  { 
    $unwind: "$itemRevenues" 
  },
  {
    $group: {
      _id: "$itemRevenues.product",
      totalRevenue: { $sum: "$itemRevenues.revenue" }
    }
  },
  {
    $sort: { totalRevenue: -1 }
  },
  { 
    $limit: 1 
  }
])
```
