# README

| No.  | AWS Questions                                                                 |
|------|-------------------------------------------------------------------------------|
| Q1. | [What are the challenges of traditional infrastructure?](#q1-what-are-the-challenges-of-traditional-infrastructure) |
| Q2. | [What Are Cloud Services?](#q2-what-are-cloud-services)                       |
| Q3. | [What are the types of cloud models?](#q3-what-are-the-types-of-cloud-models) |
| Q4. | [AWS Regions and Availability Zones?](#q4-aws-regions-and-availability-zones) |
| Q5. | [AWS Edge Locations & Local Zones?](#q5-aws-edge-locations--local-zones) |
| Q6. | [What Is EC2?](#q6-aws-ec2-elastic-compute-cloud) |
| Q7. | [Accessing AWS EC2 Instances](#q7-accessing-aws-ec2-instances) |
| Q8. | [What is a Security Group?](#q8-what-is-a-security-group) |
| Q9. | [AWS Instance Types – Choosing the Right Instance Type](#q9-aws-instance-types--choosing-the-right-instance-type) |
| Q10. | [AWS EC2 Pricing Models & Instance Types](#q10-aws-ec2-pricing-models--instance-types) |
| Q11. | [What is Instance Metadata?](#q11-what-is-instance-metadata) |
| Q12. | [What is an Elastic IP?](#q12-what-is-an-elastic-ip) |
| Q13. | [Amazon Elastic Block Store (EBS) & Instance Storage](#q13-amazon-elastic-block-store-ebs--instance-storage) |
| Q14. | [EBS Volume Setup and Safe Detachment](#q14-ebs-volume-setup-and-safe-detachment) |
| Q15. | [EBS Volume Modification and File System Extension](#q15-ebs-volume-modification-and-file-system-extension) |
| Q16. | [How can I attach one Amazon EBS volume to multiple EC2 instances?](#q16-how-can-i-attach-one-amazon-ebs-volume-to-multiple-ec2-instances) |
| Q17. | [Amazon EBS Volume Types](#q17-amazon-ebs-volume-types) |
| Q18. | [Amazon EBS Snapshots](#q18-amazon-ebs-snapshots) |
| Q19. | [Creating the First Snapshot](#q19-create-the-first-snapshot) |

## Q1. What are the challenges of traditional infrastructure?

Traditional computing (on-premise infrastructure) involves maintaining physical servers and data centers. Though widely used in the past, it has several limitations:

### a. High Upfront Costs
- Significant capital investment in hardware, software, and facilities.
- Ongoing costs: maintenance, electricity, cooling.

### b. Scalability Issues
- Hardware must be manually added or removed.
- Risk of over- or under-provisioning.

### c. Limited Flexibility
- Upgrades are time-consuming and require detailed planning.
- Adapting to new demands is slow and inefficient.

### d. Maintenance Burden
- IT staff must handle hardware failures, software updates, and security patches.
- More downtime and slower innovation cycles.

### e. Disaster Recovery & Business Continuity
- Requires duplicate infrastructure for backups and failover.
- Higher risk of data loss if not well-architected.

---

## 2. Enter Cloud Computing

Cloud computing delivers computing services (e.g., servers, storage, databases, networking, software) via the internet using a **pay-as-you-go** model.

### 🌐 Key Characteristics:
- **On-demand self-service**
- **Broad network access**
- **Resource pooling**
- **Rapid elasticity**
- **Measured service (usage-based billing)**

**Popular Cloud Providers**:  
☁️ AWS | ☁️ Microsoft Azure | ☁️ Google Cloud Platform (GCP)

---

## 3. Why Businesses Prefer Cloud Computing

### a. Cost Efficiency
- No upfront CapEx — pay only for resources used.
- Lower operational and maintenance costs.

### b. Scalability and Flexibility
- Instantly scale up or down as demand fluctuates.
- Ideal for both startups and large enterprises.

### c. Speed and Agility
- Rapid deployment of applications and infrastructure.
- Accelerates development cycles and innovation.

### d. Reliability and Availability
- Built-in fault tolerance and redundancy.
- Disaster recovery is integrated and automated.

### e. Security
- Enterprise-grade encryption, firewalls, and IAM.
- Compliance with ISO, GDPR, HIPAA, and more.

### f. Global Reach
- Deploy workloads in data centers around the world.
- Reduces latency and improves customer experience.

---

## 4. Real-Life Example: Traditional vs. Cloud

**Scenario**: An e-commerce company preparing for a seasonal sale.

### 🏢 Traditional Approach:
- Procure and install new servers weeks in advance.
- Potential over-provisioning and high upfront cost.
- Risk of downtime during high traffic.

### ☁️ Cloud Approach:
- Use auto-scaling to match incoming demand.
- Only pay for additional resources during the spike.
- Rapid deployment with built-in reliability.

---

## 📊 Summary Table

| Feature          | Traditional Computing      | Cloud Computing              |
|------------------|----------------------------|------------------------------|
| **Cost Model**   | Capital Expenditure (CapEx)| Operational Expenditure (OpEx)|
| **Scalability**  | Manual and slow            | Automatic and elastic        |
| **Deployment**   | Weeks or months            | Minutes                      |
| **Maintenance**  | In-house IT staff          | Handled by cloud provider    |
| **Security**     | Custom, often inconsistent | Standardized, certified      |
| **Availability** | Higher risk of downtime    | High availability by default |
| **Global Reach** | Limited to physical setup  | Worldwide infrastructure     |


<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>

## Q2. What Are Cloud Services?

Cloud services offer on-demand access to computing resources such as servers, storage, databases, networking, software, and analytics via the internet. These services eliminate the need to own or maintain physical infrastructure, providing scalability, efficiency, and cost-effectiveness.

---

## 🔍 What Are Cloud Services?

Cloud services allow users to rent IT resources online instead of building and maintaining on-premises infrastructure. This includes computing power, storage, development platforms, and applications.

### **Key Benefits**
- ⚡ **Scalability** – Instantly scale resources as needed.
- 💸 **Cost-Efficiency** – Pay only for what you use.
- 🚀 **Performance** – Access fast, global infrastructure.
- 🔐 **Security** – Built-in encryption and identity controls.
- 🌍 **Accessibility** – Work from anywhere with internet access.

---

## 🧱 Primary Types of Cloud Services

### 1. **Infrastructure as a Service (IaaS)**
- **Key Features**:
  - Provides virtualized computing infrastructure.
  - Users manage OS, apps, and runtime.
- **Use Case**: Hosting custom websites or applications.
- **Examples**:
  - AWS EC2
  - Azure Virtual Machines
  - Google Compute Engine

---

### 2. **Platform as a Service (PaaS)**
- **Key Features**:
  - Provides development tools and environments.
  - Users focus on app development, not server management.
- **Use Case**: Building and deploying custom apps.
- **Examples**:
  - Google App Engine
  - Azure App Services
  - Heroku

---

### 3. **Software as a Service (SaaS)**
- **Key Features**:
  - Fully functional software delivered via the web.
  - No infrastructure or platform management required.
- **Use Case**: Using tools like email, CRM, or office apps.
- **Examples**:
  - Google Workspace (Docs, Gmail)
  - Microsoft 365 (Outlook, Word)
  - Salesforce

---

## 🧩 Visual Representation: Cloud Service Models


---

## 🧠 How to Identify the Right Service for Your Needs

### ✅ Decision Criteria

| Criteria                     | IaaS           | PaaS              | SaaS                |
|-----------------------------|----------------|--------------------|---------------------|
| Control Level               | High           | Medium             | Low                 |
| Customization               | Full            | App-level          | Minimal             |
| Maintenance Responsibility  | High           | Medium             | Low                 |
| Technical Skill Required    | High           | Moderate           | Low                 |

### 🎯 Use Case Scenarios

| Scenario                                  | Best Fit   |
|-------------------------------------------|------------|
| Scalable e-commerce app                   | IaaS       |
| Developing custom web/mobile apps         | PaaS       |
| Using email, CRM, or office tools         | SaaS       |
| Enterprise systems with IT departments    | IaaS/PaaS  |

---

## 🏁 Conclusion

Cloud services transform how we deploy, scale, and manage technology. Understanding the differences between **IaaS**, **PaaS**, and **SaaS** enables you to choose the right model for your needs—enhancing agility, reducing costs, and supporting innovation.

<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>


## Q3. What are the types of cloud models?

A clear and structured overview of cloud computing deployment and service models, with features, use cases, and comparisons.

---

## 📦 Deployment Models

### 🔹 Public Cloud

* **Description**: Operated by third-party providers over the internet.
* **Examples**: AWS, Azure, GCP
* **Key Features**:

  * Low cost, scalable, no infrastructure to manage
  * Multi-tenant environment
* **Use Case**: Hosting web apps with low initial investment

---

### 🔹 Private Cloud

* **Description**: Used exclusively by a single organization, either on-premises or hosted.
* **Examples**: VMware, Azure Stack
* **Key Features**:

  * High control, customization, and security
  * Suitable for strict compliance environments
* **Use Case**: Banks or government entities needing full data control

---

### 🔹 Hybrid Cloud

* **Description**: Combines public and private environments.
* **Examples**: AWS Outposts, Azure Arc
* **Key Features**:

  * Flexibility in workload management
  * Optimized cost and performance
* **Use Case**: Businesses needing data privacy and burst scalability

---

### 🔹 Community Cloud

* **Description**: Shared between organizations with common needs (e.g., compliance, research).
* **Examples**: Government, Education sector collaborations
* **Key Features**:

  * Cost and resource sharing
  * Industry-focused infrastructure
* **Use Case**: Universities collaborating on a joint research project

---

## 🧰 Service Models

### ⚙️ Infrastructure as a Service (IaaS)

* **Examples**: AWS EC2, Azure VMs, GCP Compute Engine
* **You Manage**: OS, applications, data
* **Provider Manages**: Servers, storage, networking
* **Use Case**: Custom app development and testing

---

### 🛠️ Platform as a Service (PaaS)

* **Examples**: Heroku, Google App Engine, Azure App Services
* **You Manage**: Code, data
* **Provider Manages**: Infrastructure, OS, runtime
* **Use Case**: Rapid application development

---

### 💼 Software as a Service (SaaS)

* **Examples**: Google Workspace, Salesforce, Microsoft 365
* **You Manage**: Usage only
* **Provider Manages**: Everything else
* **Use Case**: CRM, document editing, collaboration tools

---

### 🧠 Function as a Service (FaaS) / Serverless

* **Examples**: AWS Lambda, Azure Functions, GCP Cloud Functions
* **You Manage**: Functions/code only
* **Provider Manages**: All infrastructure
* **Use Case**: Event-driven microservices (e.g., auto image resizing)

---

## ⚖️ Deployment Model Comparison

| Feature         | Public Cloud   | Private Cloud      | Hybrid Cloud      | Community Cloud  |
| --------------- | -------------- | ------------------ | ----------------- | ---------------- |
| **Ownership**   | Third-party    | Organization-owned | Mixed             | Shared           |
| **Cost**        | Low            | High               | Medium            | Shared           |
| **Security**    | Moderate       | High               | High              | High             |
| **Scalability** | High           | Limited            | High              | Moderate         |
| **Best For**    | Startups, SMEs | Regulated sectors  | Large enterprises | Specific sectors |

---

## ⚙️ Service Model Comparison

| Model | Managed by Provider               | Managed by User | Best For                             |
| ----- | --------------------------------- | --------------- | ------------------------------------ |
| IaaS  | Hardware, Network, Virtualization | OS, Apps, Data  | Flexible dev environments            |
| PaaS  | Runtime, Middleware               | Code, Data      | Fast web/app development             |
| SaaS  | Everything                        | Usage only      | End users (email, CRM, office tools) |
| FaaS  | All infra, scaling, runtime       | Function logic  | Lightweight, event-based execution   |

---

## ✅ Choosing the Right Model

Consider the following when selecting your cloud model:

* **Security & Compliance**
* **Cost & Budget**
* **Development Speed**
* **IT Skill Level**
* **Scalability Needs**
* **Customization Requirements**


> ⚡ *Pro Tip:* Most modern organizations use a combination of models — for example, SaaS for productivity, IaaS for infrastructure, and hybrid clouds for flexibility.

<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>



## Q4. AWS Regions and Availability Zones

AWS Regions are geographically separated areas where Amazon Web Services (AWS) clusters its data centers. Each Region is designed to be isolated from others to ensure fault tolerance, compliance, and low-latency performance.

## 📌 Key Points
- AWS infrastructure is designed for high availability, fault tolerance, and scalability.
- AWS services are deployed across **multiple Regions** and **Availability Zones (AZs)**.
- This global infrastructure enables low-latency access and compliance with local regulations.

## 🌍 Example
- **Region:** `Asia Pacific (Mumbai)`  
- **Code:** `ap-south-1`  
- **Availability Zones:** `ap-south-1a`, `ap-south-1b`, `ap-south-1c`

---

## 🌐 Why AWS Uses Global Regions
- **Latency Optimization:** Locating infrastructure near users improves speed.
- **Compliance Requirements:** Meet data residency and regulatory needs.
- **Disaster Recovery:** Isolate infrastructure for risk mitigation.
- **Scalability:** Serve a growing global customer base efficiently.

---

## 🏢 Understanding AWS Availability Zones

### 🔍 What Are Availability Zones?
- **AZs** are isolated locations within an AWS Region.
- Each AZ has its own power, cooling, and networking.
- They are connected through **low-latency, high-throughput, and redundant** networking.

### 🧾 Key Characteristics:
- Physically separated but geographically close.
- Redundant power and network infrastructure.
- Independent failure domains.
- Connected via private fiber-optic links.

---

### 🤔 Why Does AWS Use Availability Zones?
- **Fault Isolation:** Prevent a failure in one AZ from affecting others.
- **High Availability:** Distribute workloads across AZs for resilience.
- **Disaster Recovery:** Design robust systems with AZ redundancy.
- **Scalable Architectures:** Deploy scalable apps across multiple zones.

---

### 🏗️ How Are Availability Zones Structured?
- Each **Region** has **2 to 6+ AZs**.
- AZs are housed in **distinct data centers**, each with:
  - Independent power supply.
  - Dedicated cooling systems.
  - Physical security measures.
- AZs are **connected using high-speed private networking** for real-time data replication.

---

### 📍 Example: Mumbai Region
- **Region Name:** Asia Pacific (Mumbai)
- **Region Code:** `ap-south-1`
- **Availability Zones:**  
  - `ap-south-1a`  
  - `ap-south-1b`  
  - `ap-south-1c`
- Mumbai Region provides low-latency services to Indian subcontinent customers.

---

## ✅ Best Practices

- **Deploy applications across multiple Availability Zones (AZs):**  
  Ensure high availability, redundancy, and fault tolerance by spreading workloads across multiple AZs within a single Region.

- **Use Elastic Load Balancing (ELB):**  
  Distribute incoming application traffic automatically across multiple AZs to improve fault tolerance and responsiveness.


### 🔄 Benefits of Using Multiple Availability Zones
- **Fault Tolerance:** Failover between zones during outages.
- **Load Distribution:** Balance incoming traffic across AZs.
- **Improved SLA:** Higher uptime guarantees.
- **Resilient Design:** Architect services for automatic failover and recovery.
- **Seamless Updates:** Perform maintenance in one AZ while keeping services running in others.

<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>


## Q5. AWS Edge Locations & Local Zones

## 📦 What Are AWS Edge Locations?

**AWS Edge Locations** are data centers within the Amazon Web Services (AWS) global network that deliver content and services closer to end users, minimizing latency.

These locations are part of **Amazon CloudFront**, **AWS Global Accelerator**, and **Route 53**, among other services, and are designed to cache and process data closer to users to improve speed, reliability, and user experience.

### ✅ Main Benefits of AWS Edge Locations

- **Low Latency**: Data and services are delivered closer to users.
- **Improved Performance**: Faster content delivery through caching.
- **Scalability**: Efficient support for global user bases.
- **Security**: Built-in DDoS protection and encryption.
- **High Availability**: Redundancy and failover capabilities.

---

## 🏙️ AWS Local Zones

### 📌 What Are AWS Local Zones?

**AWS Local Zones** extend AWS Regions by placing compute, storage, and other services closer to end users in specific geographic locations. This ensures ultra-low latency for applications like real-time gaming, media processing, ML inference, and more.

> **Note:** Local Zones are connected to a parent AWS Region and are managed using the same tools and APIs.

---

### 🌟 Key Features of AWS Local Zones

- **Ultra-Low Latency**: For applications requiring millisecond responsiveness.
- **Local Data Processing**: Compute and store data near the source.
- **Reduced Backhaul**: Minimize round trips to the AWS Region.
- **Elasticity & Scale**: Dynamic scaling with AWS resource flexibility.
- **Seamless Integration**: Works with familiar AWS services and tools.

---

### 🤔 Why Use AWS Local Zones?

- Support **latency-sensitive** workloads like **gaming**, **AR/VR**, and **live streaming**.
- Comply with **data residency regulations** and **enterprise IT** needs.
- Enable **hybrid architectures** that bridge on-premises and cloud environments.
- Improve **disaster recovery** and **backup** by reducing dependency on central regions.
- Run **real-time analytics** and **edge AI/ML** applications close to the data source.

---

### 🔧 Services Available in Local Zones

Commonly supported services in AWS Local Zones include:

- **Amazon EC2** – Virtual servers
- **Amazon EBS** – Block storage
- **Amazon VPC** – Networking
- **Amazon ECS / EKS** – Container orchestration
- **Amazon FSx** – Managed file systems
- **Amazon ElastiCache** – In-memory caching
- **Amazon RDS** – Relational databases

> 📍 [Check the official list of supported services per Local Zone](https://aws.amazon.com/about-aws/global-infrastructure/localzones/)

---

### 🛠️ Use Cases for AWS Local Zones

| Use Case                     | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| 🎮 **Gaming**               | Real-time multiplayer gaming with minimal latency                          |
| 🎥 **Media & Entertainment**| Video editing, rendering, and broadcasting with low-latency workflows       |
| 🧠 **Machine Learning**      | Low-latency inference for ML models at the edge                            |
| 🛡️ **Edge Analytics**        | Industrial data processing, sensor data analysis, and more                 |
| 🏢 **Enterprise Applications**| Extension of on-premises environments using secure, scalable AWS services |
| 📡 **AR/VR**                | Immersive applications requiring near-instantaneous feedback               |



## 📌 Summary

| Feature           | Edge Locations                          | Local Zones                                  |
|-------------------|------------------------------------------|----------------------------------------------|
| **Purpose**       | Content delivery & DNS                   | Run apps close to users                       |
| **Latency Focus** | Milliseconds                             | Single-digit milliseconds                    |
| **Scope**         | Global (100s of locations)               | Specific cities/regions                      |
| **Services**      | CDN, DNS, VPN                            | Compute, storage, database, containers       |
| **Best For**      | Static/dynamic content, DNS              | Gaming, media, ML, hybrid IT, low-latency apps|


<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>



## Q6. AWS EC2 (Elastic Compute Cloud)

Amazon EC2 (Elastic Compute Cloud) is a foundational service offered by **Amazon Web Services (AWS)** that provides secure, scalable, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

---

## 🌐 What Is EC2?

**Amazon EC2** enables users to launch virtual servers, known as **instances**, in the cloud. These instances can be used just like physical computers but with the flexibility and scalability of cloud infrastructure. You can run applications, host websites, perform analytics, or deploy backend systems without managing physical hardware.

---

## 🚀 Key Features

* **Scalability**: Automatically scale capacity up or down using Auto Scaling and Elastic Load Balancing.
* **Flexible Instance Types**: Choose from a wide variety of instance types optimized for different workloads (general purpose, compute-optimized, memory-optimized, etc.).
* **Elastic IP Addresses**: Static IP addresses for dynamic cloud computing.
* **Custom AMIs**: Create and use custom Amazon Machine Images (AMIs).
* **Integrated with AWS Ecosystem**: Seamlessly integrates with other AWS services like S3, RDS, VPC, CloudWatch, IAM, and more.
* **Security**: Secure login with key pairs, security groups for firewall protection, and IAM roles for access control.
* **Cost-Effective**: Pay-as-you-go pricing and reserved instance options for predictable workloads.

---

## 🧐 Why Use EC2?

* **On-Demand Flexibility**: Instantly provision servers as needed.
* **Global Infrastructure**: Deploy instances across multiple geographic regions and availability zones.
* **No Upfront Hardware Cost**: Reduce capital expenses by eliminating the need for physical servers.
* **High Availability and Reliability**: Deploy in multiple availability zones for failover and disaster recovery.
* **Dev/Test Environments**: Quickly spin up environments for development, testing, or QA.
* **Performance Optimization**: Leverage instance types that are optimized for specific workloads like ML, HPC, gaming, etc.

---

## ⚙️ Key Configurations in EC2

1. **Instance Type**: Defines the hardware of the host computer (e.g., t3.micro, m5.large).
2. **Amazon Machine Image (AMI)**: A template with OS and preconfigured software.
3. **Key Pair**: SSH key pair used for secure login.
4. **Security Groups**: Virtual firewall rules for controlling traffic.
5. **Storage**: EBS volumes (Elastic Block Store) or instance store.
6. **IAM Role**: Grants permissions to the EC2 instance to interact with AWS services.
7. **VPC & Subnets**: Defines networking for the instance.
8. **Elastic IP**: Optional static IP for public access.

---

## 🧱 Steps to Launch an EC2 Instance

1. **Sign in to AWS Console**
2. Navigate to **EC2 Dashboard**
3. Click **Launch Instance**
4. Configure:

   * **Name and Tags**
   * **AMI (e.g., Amazon Linux, Ubuntu)**
   * **Instance Type (e.g., t3.micro for free tier)**
   * **Key Pair (for SSH access)**
   * **Network settings (VPC, subnet, security group)**
   * **Storage configuration**
5. Review and click **Launch**
6. Connect via SSH using the key pair:

   ```bash
   ssh -i "your-key.pem" ec2-user@your-instance-public-ip
   ```

---

## 🧪 Example: Creating a Basic EC2 Instance

```bash
# 1. Choose an AMI (e.g., Amazon Linux 2)
# 2. Choose instance type (e.g., t3.micro for Free Tier)
# 3. Configure key pair: my-key.pem

# SSH into instance
chmod 400 my-key.pem
ssh -i "my-key.pem" ec2-user@<PUBLIC-IP-ADDRESS>
```

---

## 🔧 Use Cases of EC2

* **Web Hosting**: Deploy web servers and host dynamic websites.
* **Application Servers**: Run backend services, APIs, and microservices.
* **Development and Testing**: Isolated environments for dev/test cycles.
* **Machine Learning**: Use GPU-enabled instances for training and inference.
* **Big Data & Analytics**: Run Hadoop, Spark, and other analytics tools.
* **Game Servers**: Host multiplayer game servers with low latency.
* **CI/CD Pipelines**: Integrate with Jenkins, GitLab, etc., for continuous integration and delivery.
* **Container Hosting**: Run Docker containers or deploy Kubernetes clusters.

<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>



## Q7. Accessing AWS EC2 Instances

## 📌 Prerequisites

* An active **AWS account**
* A **running EC2 instance** with a valid key pair (`.pem` file)
* **SSH access** or **EC2 Instance Connect**
* Basic knowledge of Linux commands

---

## 🔑 Accessing EC2 from Linux (SSH)

1. **Set correct permissions for your key file:**

   ```bash
   chmod 400 my-key.pem
   ```

2. **Connect to your instance:**

   ```bash
   ssh -i my-key.pem ec2-user@<Public-IP-or-DNS>
   ```

   * For Ubuntu instances:

     ```bash
     ssh -i my-key.pem ubuntu@<Public-IP-or-DNS>
     ```

## 🌐 Browser-Based Access

Alternatively, you can connect via the **AWS Management Console → EC2 → Connect → EC2 Instance Connect** (no need to manage SSH keys).

---

## 🖥️ Useful Linux Commands Used

### 🔍 Check System Information

```bash
cat /etc/os-release   # Shows OS details
lscpu                 # Displays CPU details
df -h                 # Shows disk space usage
ip a                  # Displays network interface details
```

---

## 🛠️ Nginx Installation & Configuration

### 1️⃣ Switch to Root User

```bash
sudo -i
clear
```

### 2️⃣ Update Packages

```bash
apt-get update
```

### 3️⃣ Install Nginx

```bash
apt-get install nginx -y
```

### 4️⃣ Verify Nginx Configuration

```bash
nginx -t
```

### 5️⃣ Check Nginx Status

```bash
service nginx status
```

### 6️⃣ Test Nginx Locally

```bash
curl localhost
cat index.nginx-debian.html
```

### 7️⃣ Create a Custom HTML Page

```bash
echo "Welcome to AWS Learning" > index.html
curl localhost
```

---

## ✅ Verifying Instance Configuration

### Network and System Checks

```bash
cat /etc/os-release   # Verify OS
lscpu                 # Check CPU details
df -h                 # Check disk usage
ip a                  # Verify IP addresses
```

---

## ⚖️ Avoiding Overloaded Availability Zones

* Use **multiple AZs** for better availability.
* Distribute instances across regions if required.
* Use **Auto Scaling Groups** to manage traffic.



<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>


## Q8. What is a Security Group?

A **Security Group (SG)** in AWS acts as a **virtual firewall** for your **EC2 instances** to control **inbound and outbound traffic**.

✅ Key Points:
- Operates **at the instance level**, not the subnet level.
- **Stateful** – if inbound traffic is allowed, the outbound response is automatically allowed.
- Each instance can be associated with **multiple security groups**.
- **Default behavior:**
  - Inbound traffic → **DENIED** (unless allowed).
  - Outbound traffic → **ALLOWED** (unless denied).

---

## 🔐 Inbound and Outbound Rules

### 🔹 Inbound Rules
Define traffic **allowed to reach the instance**.

Examples:
- Allow SSH (port 22) from a specific IP.
- Allow HTTP (port 80) from anywhere (`0.0.0.0/0`).
- Allow database access (port 3306) only from another security group.

### 🔹 Outbound Rules
Define traffic **allowed to leave the instance**.

Examples:
- Allow all outbound traffic (default).
- Restrict instances to communicate only with specific IPs or ports.

---

## ⚙️ Configuring Security Groups on EC2 Console

### ✅ Steps:
1. Go to **AWS Management Console → EC2 → Security Groups**.
2. Click **Create Security Group**.
3. Provide **Name**, **Description**, and **VPC**.
4. **Add Inbound Rules**:
   - Select **Type** (SSH, HTTP, Custom TCP, etc.).
   - Set **Port Range**.
   - Define **Source** (IP, CIDR, or another SG).
5. **Add Outbound Rules** (optional).
6. Attach the SG to an EC2 instance at launch or modify later.

---

## 📌 What is the Source?

The **Source** defines **who can send traffic** to your instance (for inbound rules).

It can be:
- **IP Address** → e.g. `203.0.113.25/32` (single IP)
- **CIDR Range** → e.g. `203.0.113.0/24` (range of IPs)
- **Another Security Group** → useful for allowing traffic only from specific instances.

---

## 🔗 Can We Connect Multiple Security Groups to a Single Instance?

✅ **Yes!**  
- An EC2 instance can have **multiple security groups attached**.  
- **All rules are combined (union)** to determine access.  

Example use case:
- One SG for **SSH**, another for **Web traffic**, another for **Database access**.

---

## 📜 Example Security Group Setup

| Rule Type | Protocol | Port Range | Source                     | Description                  |
|-----------|-----------|------------|----------------------------|------------------------------|
| Inbound   | TCP       | 22         | 203.0.113.10/32           | Allow SSH from office IP     |
| Inbound   | TCP       | 80         | 0.0.0.0/0                 | Allow HTTP from anywhere     |
| Inbound   | TCP       | 3306       | sg-0abcd1234efgh5678      | Allow DB access from App SG  |
| Outbound  | All       | All        | 0.0.0.0/0                 | Allow all outbound traffic   |

<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>


## Q9. AWS Instance Types – Choosing the Right Instance Type

Amazon Web Services (AWS) provides a wide range of **EC2 (Elastic Compute Cloud) instance types** to run applications in the cloud. Each instance type offers different combinations of **CPU, memory, storage, and networking capacity**, enabling you to select the best configuration for your workload.

This guide provides a comprehensive overview of AWS instance types and practical advice for **choosing the right instance type** based on your application needs.

---

## 📌 What is an AWS Instance Type?

An **AWS instance type** defines the **hardware specifications** of a virtual server (EC2 instance) in AWS. It determines:

- **vCPUs (virtual CPUs)** – processing power  
- **Memory (RAM)** – available memory for applications  
- **Storage type and capacity** – local SSD (instance store) or EBS volumes  
- **Networking performance** – bandwidth and network features  
- **Pricing model** – On-Demand, Spot, Reserved, or Savings Plans  

AWS categorizes instance types into **families**, each optimized for a specific workload.

---

## 🔹 AWS Instance Type Families

| Family                  | Use Case                                    | Examples                   |
|-------------------------|---------------------------------------------|----------------------------|
| **General Purpose**     | Balanced compute, memory, and networking    | `t3`, `t4g`, `m6i`, `m7g`  |
| **Compute Optimized**   | High-performance processing, gaming, batch  | `c6i`, `c7g`, `c5n`        |
| **Memory Optimized**    | In-memory databases, big data analytics     | `r6i`, `x2idn`, `z1d`      |
| **Storage Optimized**   | High IOPS workloads, data warehousing       | `i4i`, `d3en`, `h1`        |
| **Accelerated Computing** | Machine learning, HPC, GPU rendering      | `p4d`, `g5`, `f1`          |
| **High-Performance Computing (HPC)** | Scientific simulations, CFD, genomics | `hpc6id`, `hpc7g` |

---

## 🛠️ Key Instance Attributes

- **vCPUs** – Determines the processing power.  
- **Memory (RAM)** – Critical for memory-intensive applications.  
- **Storage Options** – Instance Store (local SSD) or EBS (persistent).  
- **Networking Performance** – Affects data transfer speed and latency.  
- **Cost** – Pricing varies by instance type, size, and region.  

---

## 🔍 How to Choose the Right Instance Type

1. **Define Your Workload Requirements**
   - CPU-intensive → Use **compute-optimized** (`c` family)
   - Memory-heavy → Use **memory-optimized** (`r` or `x` family)
   - Balanced → Use **general-purpose** (`t` or `m` family)
   - GPU/ML workloads → Use **accelerated computing** (`g`, `p`, or `f` family)

2. **Right-Size the Instance**
   - Start small, monitor, and scale up or down as needed.

3. **Consider Pricing Options**
   - **On-Demand** – Pay as you go  
   - **Reserved Instances** – Up to 72% savings for long-term use  
   - **Spot Instances** – Cheapest but can be interrupted  
   - **Savings Plans** – Flexible long-term savings  

4. **Use AWS Tools**
   - [AWS Compute Optimizer](https://aws.amazon.com/compute-optimizer/)  
   - [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/)

---

## 📊 Instance Size Naming Convention

Example: **m6i.large**

- `m` → Family (General Purpose)  
- `6` → Generation  
- `i` → Intel processor (`g` = Graviton, `a` = AMD)  
- `large` → Size (`nano`, `micro`, `small`, `medium`, `large`, `xlarge`, etc.)  

---

## ✅ Best Practices

✅ **Benchmark before finalizing** – Test different instance types.  
✅ **Use Auto Scaling** – Automatically add/remove instances based on load.  
✅ **Leverage Graviton (ARM-based)** – Cost-effective and energy-efficient.  
✅ **Combine with Spot Instances** – Reduce costs for flexible workloads.  

---

<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>



## Q10. AWS EC2 Pricing Models & Instance Types

## 📌 EC2 Pricing Models

### 1️⃣ On-Demand Instances
- **Pay-per-use** with no long-term commitment.
- **Best for:** Short-term, unpredictable workloads.
- **Pros:** Full flexibility, no upfront cost.
- **Cons:** Most expensive option.

---

### 2️⃣ Reserved Instances (RIs)
- **Commit to 1 or 3 years** for up to **72% savings**.
- **Types:**  
  - **Standard RIs** – Maximum savings, less flexible.  
  - **Convertible RIs** – Flexible across instance families/OS.  
- **Best for:** Steady-state workloads.

---

### 3️⃣ Spot Instances
- **Use spare AWS capacity** at up to **90% discount**.
- **Best for:** Fault-tolerant workloads (batch jobs, big data, ML).  
- **Note:** Can be interrupted with a 2-min warning.

---

### 4️⃣ Savings Plans
- **Commit to a consistent spend ($/hour)** for 1 or 3 years.  
- **Types:**  
  - **Compute Savings Plan** – Most flexible.  
  - **EC2 Instance Savings Plan** – Lower cost, less flexible.  
- **Best for:** Predictable usage needing flexibility.

---

### 5️⃣ Dedicated Hosts / Dedicated Instances
- **Physical servers dedicated to you.**  
- **Best for:** Compliance or BYOL (Bring Your Own License).  
- **Cons:** Higher cost.

---

### 6️⃣ Capacity Reservations
- **Reserve capacity** in a specific AZ **without long-term commitment**.  
- Useful for **mission-critical apps** that must always have capacity.

---

## 📌 AWS Instance Families

| Instance Family | Use Case |
|-----------------|-----------|
| **General Purpose (t, m)** | Balanced CPU, memory, networking |
| **Compute Optimized (c)** | High-performance compute workloads |
| **Memory Optimized (r, x, z)** | In-memory DBs, analytics |
| **Storage Optimized (i, d, h)** | High I/O, NoSQL, data warehousing |
| **Accelerated Computing (p, g, f, trn)** | ML/AI, GPU, HPC |
| **Mac Instances (mac1, mac2)** | macOS workloads, iOS app builds |
| **High Memory (u)** | SAP HANA, large in-memory apps |

---

## 📊 Pricing Model Comparison

| Model               | Commitment | Savings | Best For |
|---------------------|-----------|---------|----------|
| On-Demand           | None      | ❌      | Short-term, dev/test |
| Reserved Instances  | 1–3 yrs   | ✅✅✅   | Steady-state workloads |
| Spot                | None      | ✅✅✅✅ | Fault-tolerant jobs |
| Savings Plans       | 1–3 yrs   | ✅✅✅   | Predictable usage |
| Dedicated Hosts     | 1–3 yrs   | ✅      | Compliance/licensing |

---

## ✅ Cost Optimization Tips
✅ Use **AWS Cost Explorer** & **Trusted Advisor** to analyze spending.  
✅ Combine **Savings Plans + Spot Instances** for best savings.  
✅ Use **Auto Scaling** to manage fluctuating workloads.  
✅ Use **AWS Compute Optimizer** to right-size instances.  


<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>


## Q11. What is Instance Metadata?

Instance metadata is **a special service provided by cloud platforms (AWS, Azure, GCP, etc.)** that allows an instance (like a virtual machine or container) to query information about itself.

This information is **retrieved through a metadata service endpoint**, typically available at a fixed IP address (e.g., `169.254.169.254` on AWS).

Metadata is **dynamic**, meaning that some values may change during the lifecycle of the instance (e.g., temporary credentials, dynamic IP assignments).

---

## 📂 What You Can Find in Instance Metadata?

The exact details vary by cloud provider, but typical metadata includes:

### 🔹 Basic Instance Information
- Instance ID  
- Instance type (e.g., `t2.micro`)  
- Hostname  
- Availability zone / region  

### 🔹 Networking Information
- Public and private IP addresses  
- MAC addresses  
- Network interface details  

### 🔹 Identity and Security
- IAM role attached to the instance (AWS)  
- Temporary security credentials (access keys, tokens)  
- SSH public keys  

### 🔹 Storage and Configuration
- Block device mapping  
- Boot time and launch index  
- User-data (custom startup scripts provided at instance launch)  

---

## 💻 Accessing Instance Metadata with cURL

Metadata can be accessed **only from inside the instance**, using tools like `curl`.

### Example (AWS EC2):

## 🔹 1. Get a Session Token
```bash
TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" \
  -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")
````

## 🔹 2. List All Metadata Categories

```bash
curl -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/
```

## 🔹 3. Get Specific Metadata

### ✅ Instance ID

```bash
curl -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/instance-id
```

### ✅ Private IP

```bash
curl -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/local-ipv4
```

### ✅ Public IP

```bash
curl -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/public-ipv4
```

### ✅ AMI ID

```bash
curl -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/ami-id
```

### ✅ IAM Role Name

```bash
curl -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/iam/security-credentials/
```

---

## 🔹 4. Script to Print Key Details

```bash
TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" \
  -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")

for path in instance-id ami-id local-ipv4 public-ipv4 security-groups; do
  echo "$path: $(curl -s -H "X-aws-ec2-metadata-token: $TOKEN" \
    http://169.254.169.254/latest/meta-data/$path)"
done
```

📌 **Output Example:**

```
instance-id: i-0abcd1234efgh5678
ami-id: ami-0abcd1234efgh5678
local-ipv4: 172.31.15.104
public-ipv4: 3.91.23.45
security-groups: my-sg-name
```

```
```

<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>


## Q12. What is an Elastic IP?

An **Elastic IP (EIP)** is a **static IPv4 address** in AWS that you can allocate to your account and associate with an **EC2 instance**, **Network Interface (ENI)**, or **NAT Gateway**.  
Unlike the default public IP, which changes if you stop/start an EC2 instance, an Elastic IP stays **persistent** until you release it.

---

## ✅ Key Features
- 🔒 **Static & Persistent** – The IP remains the same even after instance restarts.  
- 📦 **Account-level Allocation** – You own it in your AWS account until you release it.  
- 🔄 **Flexible Reassociation** – Can be moved between instances in the same region.  
- ⚡ **High Availability** – Supports failover by remapping to standby instances.  

---

## 📌 Why Use an Elastic IP?
### 🔹 Problem with Default Public IP
- When you **stop/start** an EC2 instance, its public IPv4 address changes.  
- This breaks **DNS records, API endpoints, or firewall rules**.

### 🔹 Solution
✅ Use an Elastic IP to have a **fixed IP address** that remains the same, ensuring reliable connectivity.

---

## 💡 Common Use Cases

| Use Case | Description |
|----------|-------------|
| 🌍 **Static IP for Web Apps** | Hosting websites or APIs that need a fixed IP. |
| 🛡️ **SSH & Firewall Rules** | Admins can whitelist a single static IP. |
| 🔄 **Failover & HA** | Quickly remap the EIP to a standby instance during failures. |
| 🔗 **Third-party Whitelisting** | For services that require your IP to be whitelisted. |
| 🌐 **DNS Mapping** | Point domain A-records to a static EIP. |

---

## ⚠️ Things to Know
- 💰 You **pay for an EIP** if it is **allocated but not associated** with a running instance.  
- 📈 Default quota is **5 EIPs per AWS region**.  
- 🌍 **IPv6 doesn’t support EIPs** (IPv6 uses static addressing).  

---

## 🏆 Best Practices
✅ Use Elastic IPs **only when required** (prefer Load Balancers when possible).  
✅ **Release unused EIPs** to avoid charges.  
✅ Use **Route 53 domain names** instead of hardcoding IPs.  
✅ For better fault tolerance, **associate EIP with ENI**, not directly with EC2.  

## 📷 How It Works

```
+-------------------+       +---------------------+
|   Internet User   | <---> | Elastic IP (Static) |
+-------------------+       +---------------------+
                                    |
                                    v
                         +---------------------+
                         |   EC2 Instance      |
                         | (Public/Private IP) |
                         +---------------------+
```



## ✅ Key Takeaway
Elastic IPs are best when you need a static public IPv4 address for EC2 instances.
For scalable solutions, prefer Route 53 (DNS) or Load Balancers instead of relying solely on EIPs.


<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>

## Q13. Amazon Elastic Block Store (EBS) & Instance Storage

Amazon Elastic Block Store (EBS) is a **durable, high-performance block storage service** for Amazon EC2 instances.  
It provides **persistent storage** that can be **attached, detached, and reattached** to instances.

### 🔹 Key Features
- ✅ Persistent storage (data remains after instance stop/terminate)  
- ✅ Highly available and replicated within an Availability Zone (AZ)  
- ✅ Scalable in size and performance  
- ✅ Supports encryption and snapshots  
- ✅ Suitable for boot volumes, databases, and critical workloads  

---

## 📌 Types of Amazon EBS Volumes

| Volume Type | Description | Use Case | Performance |
|------------|-------------|----------|-------------|
| **gp3 (General Purpose SSD)** | Latest generation SSD with flexible IOPS/throughput | Boot volumes, dev/test apps | 3,000 IOPS baseline, up to 16,000 IOPS |
| **gp2 (General Purpose SSD)** | Older SSD type, IOPS tied to size | Same as gp3 | 3 IOPS per GB, up to 16,000 IOPS |
| **io2 / io1 (Provisioned IOPS SSD)** | High-performance SSD | Databases, enterprise apps | Up to 256,000 IOPS |
| **st1 (Throughput HDD)** | Low-cost, throughput-optimized HDD | Big data, data warehouse | Up to 500 MB/s throughput |
| **sc1 (Cold HDD)** | Lowest-cost HDD for infrequent access | Archive storage | Up to 250 MB/s throughput |

---

## 📌 Instance Storage (Ephemeral Storage)

**Instance Store** is **temporary block-level storage** that is **physically attached to the host server**.

### 🔹 Key Characteristics
- ❌ **Ephemeral:** Data is lost when instance stops or terminates  
- ⚡ Very high performance (low latency)  
- 💰 Cost included with certain instance types  
- 📦 Cannot be detached or re-attached  

### 🔹 Use Cases
- Temporary data processing  
- Caching and buffers  
- Scratch space  

---

## 📌 Differences Between EBS and Instance Store

| Feature | **EBS (Elastic Block Store)** | **Instance Store** |
|---------|------------------------------|--------------------|
| **Persistence** | ✅ Data persists after instance termination | ❌ Data lost when instance stops |
| **Durability** | ✅ Replicated within AZ | ❌ No replication |
| **Attach/Detach** | ✅ Volumes can be attached/detached | ❌ Fixed to one instance |
| **Backup** | ✅ Snapshots supported | ❌ No backup support |
| **Cost** | 💰 Charged separately | ✔ Included in instance cost |
| **Performance** | Configurable IOPS/throughput | Very high (local disk) |

---

## 📌 When to Use?

✅ **Use Amazon EBS when:**  
- You need **persistent storage**  
- You want **snapshots, backups, or replication**  
- You need **flexibility to detach/attach volumes**

✅ **Use Instance Store when:**  
- You need **temporary, high-speed storage**  
- Data can be **easily regenerated**  
- You want **cost-effective local storage**


<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>


## Q14. EBS Volume Setup and Safe Detachment

Amazon **Elastic Block Store (EBS)** provides **block-level storage volumes** for EC2 instances. They are **persistent**, meaning data remains after instance stop/termination (unless you delete the volume or have "Delete on termination" enabled for root volumes).

---

## **1. Creating an EBS Volume**

**Console Steps:**

1. Go to **EC2 Dashboard → Elastic Block Store → Volumes**.
2. Click **Create Volume**.
3. Select:

   * **Volume Type**: `gp3`, `gp2` (general purpose SSD), `io1/io2` (provisioned IOPS), `st1` (throughput-optimized HDD), `sc1` (cold HDD).
   * **Size** (GiB).
   * **Availability Zone**: Must match your EC2 instance’s AZ.
4. (Optional) Add **Tags**.
5. Click **Create Volume**.

**CLI Example:**

```bash
aws ec2 create-volume --availability-zone us-east-1a --size 10 --volume-type gp3
```

---

## **2. Attaching an EBS Volume to EC2**

**Console Steps:**

1. Select the created volume.
2. Click **Actions → Attach Volume**.
3. Choose the **instance** (must be in same AZ).
4. Enter **device name** (e.g., `/dev/sdf` for Linux, `xvdf` mapping in OS).
5. Click **Attach Volume**.

**CLI Example:**

```bash
aws ec2 attach-volume --volume-id vol-0abcd1234 --instance-id i-0abcd1234 --device /dev/sdf
```

---

## **3. Using EBS Volumes on Linux**

### **a. Connect to the Instance**

```bash
ssh -i your-key.pem ec2-user@<public-ip>
```

### **b. Identify the Device**

```bash
lsblk
sudo file -s /dev/xvdf
```

* If output says `data`, the volume is empty.
* If it shows a filesystem, data already exists.

### **c. Format the Volume (Only if Empty)**

```bash
sudo mkfs -t ext4 /dev/xvdf
```

⚠️ **Warning:** Formatting erases all data.

### **d. Create a Mount Point**

```bash
sudo mkdir /data
```

### **e. Mount the Volume**

```bash
sudo mount /dev/xvdf /data
```

### **f. Persist Mount After Reboot**

```bash
sudo blkid
sudo nano /etc/fstab
# Add the following:
UUID=<uuid-from-blkid> /data ext4 defaults,nofail 0 2
```

---

## **4. Using EBS Volumes on Windows**

**GUI Method:**

1. Connect via **RDP**.
2. Open **Disk Management** (`diskmgmt.msc`).
3. Bring disk **Online**.
4. **Initialize Disk** (MBR or GPT).
5. Create **New Simple Volume**, assign drive letter, format as NTFS.

**PowerShell Method:**

```powershell
select disk 1
attributes disk clear readonly
online disk noerr
convert mbr
create partition primary
format quick fs=ntfs label="MyVolume"
assign letter="E"
```

---

## **5. Safe Detachment & Unmounting**

**Linux:**

```bash
sudo umount /data
```

* Ensure **no processes** are using the volume (`lsof /data` or `fuser -m /data`).

**Detach via Console:**

* Select volume → **Actions → Detach Volume**.

**Detach via CLI:**

```bash
aws ec2 detach-volume --volume-id vol-0abcd1234
```

**For root volumes:**

* Must **stop the instance** before detaching.

---

## **6. Key Detachment Principles**

* **Data Preservation**: Detaching does **not** delete data.
* **Unmount First**: Prevents data corruption.
* **Reattach**: Can reattach to same or another instance.
* **Write Safety**: If detached during writes, run `fsck` or disk check after reattaching.
* **Cost**: Detached volumes incur storage charges until deleted.

---

## **7. Deleting an EBS Volume**

**Console:**

1. Ensure **state** is `available`.
2. **Actions → Delete Volume**.
3. Confirm — **data will be lost permanently**.

**CLI:**

```bash
aws ec2 delete-volume --volume-id vol-0abcd1234
```

---

## **8. Linux Usage Example (Step-by-Step)**

1. **List devices**:

```bash
lsblk
```

2. **Format (if new)**:

```bash
sudo mkfs -t ext4 /dev/xvdf
```

3. **Create mount point**:

```bash
sudo mkdir /test
```

4. **Mount**:

```bash
sudo mount /dev/xvdf /test
```

5. **Verify**:

```bash
mountpoint /test
```

6. **Create files**:

```bash
cd /test
touch file{1..5}
echo "wlcm to vaibhav world" > demo.txt
```

7. **Unmount**:

```bash
cd ..
sudo umount /test
```

8. **Reattach to another instance**:

   * **Do NOT format** if keeping data.
   * Check filesystem first:

```bash
sudo file -s /dev/xvdf
```

9. **Mount again**:

```bash
sudo mkdir /data
sudo mount /dev/xvdf /data
```

---

## **9. Volume Types & Use Cases (Exam Relevant)**

| Type    | Performance                             | Use Case                             |
| ------- | --------------------------------------- | ------------------------------------ |
| gp3     | Baseline 3,000 IOPS, burst up to 16,000 | General-purpose workloads            |
| gp2     | 3 IOPS/GB, burst up to 3,000            | Legacy general-purpose               |
| io1/io2 | Provisioned IOPS up to 64,000           | Databases, latency-sensitive apps    |
| st1     | Up to 500 MB/s throughput               | Big data, logs, sequential workloads |
| sc1     | Low cost, cold HDD                      | Infrequent access data               |

---

## **10. AWS Exam Key Points**

* **AZ Bound**: EBS volumes are tied to a single AZ. Use **snapshots** to move across AZs/Regions.
* **Persistence**: EBS data persists through stop/start of EC2 unless explicitly deleted.
* **Backups**: Snapshots are **incremental** and stored in S3.
* **Root Volume Auto-Delete**: Controlled by the `DeleteOnTermination` flag.
* **Performance Scaling**: You can change volume type and size on the fly.

 **clear breakdown** of what terms like **IOPS** and **throughput** actually mean, especially in the EBS context

---

## **1. IOPS (Input/Output Operations Per Second)**

* **Definition:** Number of **read or write operations** a storage device can perform in one second.
* **Think of it as:** *How many “transactions” per second the storage can handle*.
* **Example:**

  * If a volume has **3,000 IOPS**, it can do up to 3,000 separate reads/writes in one second.
  * Size of each operation is usually **4 KB** for SSD measurements in AWS.

**In AWS EBS:**

* **gp3** → 3,000 IOPS baseline (can go up to 16,000).
* **io1/io2** → provision IOPS up to 64,000 (paid extra).
* Higher IOPS = better for databases or workloads with **lots of small, random reads/writes**.

---

## **2. Throughput**

* **Definition:** Amount of **data transferred per second**, usually measured in **MB/s** (megabytes per second).
* **Think of it as:** *The width of the highway for your data*.
* **Example:**

  * Throughput of **250 MB/s** means you can move 250 megabytes of data every second.

**In AWS EBS:**

* **gp3** → 125 MB/s baseline, can increase to 1,000 MB/s.
* **st1** → 500 MB/s max (good for sequential data streaming).
* Higher throughput = better for workloads with **large, sequential data** like big data analytics or media streaming.

---

## **3. Key Difference Between IOPS and Throughput**

| **Term**   | **Measures**                 | **Good for**                 | **Analogy**                                                 |
| ---------- | ---------------------------- | ---------------------------- | ----------------------------------------------------------- |
| IOPS       | Number of read/write ops/sec | Random small file operations | Number of cars passing a toll booth per second              |
| Throughput | MB of data/sec               | Large file transfers         | How wide the highway is (more lanes = more data per second) |

---

## **4. Latency (Bonus Term)**

* **Definition:** Time taken to complete a single I/O operation.
* Measured in **milliseconds (ms)** or **microseconds (µs)**.
* Low latency = faster responses, important for **databases**.

---

💡 **AWS Exam Tip:**

* If question says “millions of small transactions per second” → **focus on IOPS**.
* If question says “large file streaming, sequential access” → **focus on throughput**.
* gp3 is flexible: You can **independently scale IOPS and throughput** without changing size.

<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>

## Q15. EBS Volume Modification and File System Extension
Here’s a **complete, exam-ready overview** of **EBS Volume Modification and File System Extension** — covering both AWS CCP and SAA-C03 perspectives — with all key commands, rules, and edge cases consolidated in one place.

---

# **EBS Volume Modification & File System Extension (AWS CCP & SAA-C03)**

## **1. What You Can Modify in EBS (Without Detaching)**

AWS allows certain modifications on EBS volumes **while attached and in use** (non-disruptively in most cases):

| Property        | Can Increase? | Can Decrease? | Notes                                    |
| --------------- | ------------- | ------------- | ---------------------------------------- |
| **Size**        | ✅             | ❌             | Increase only; shrinking risks data loss |
| **Volume Type** | ✅             | ✅             | E.g., gp2 → gp3, gp3 → io1, etc.         |
| **IOPS**        | ✅             | ✅             | Only for certain types (io1/io2, gp3)    |
| **Throughput**  | ✅             | ✅             | gp3 supports throughput changes          |

---

## **2. Why You Cannot Shrink EBS Volumes**

* **Block Storage Risk** – Data is stored in fixed-size blocks; shrinking could remove blocks containing data.
* AWS **does not** allow decreasing size directly.
* **Workaround** if smaller volume needed:

  1. Take **snapshot** of current volume.
  2. Create a **new smaller volume** from snapshot.
  3. Attach and migrate data.

---

## **3. Modifying an EBS Volume — Console Steps**

1. **EC2 Dashboard → Volumes**.
2. Select the volume.
3. **Actions → Modify Volume**.
4. Update:

   * **Size** (GiB)
   * **Volume Type**
   * **IOPS/Throughput** (if supported)
5. **Modify → Yes** to confirm.

**CLI Example:**

```bash
aws ec2 modify-volume --volume-id vol-xxxxxxxx --size 50
```

**Check modification status:**

```bash
aws ec2 describe-volumes-modifications --volume-id vol-xxxxxxxx
```

---

## **4. Extending a Linux File System After Resizing**

Resizing in AWS **only changes the block device size** — the OS’s file system must also be extended.

### **ext4 / ext3 File Systems**

```bash
# 1. Check new device size
lsblk

# 2. Grow partition if needed
sudo growpart /dev/xvda 1   # Device + partition number

# 3. Resize file system
sudo resize2fs /dev/xvda1

# 4. Verify
df -h
```

### **XFS File Systems**

```bash
sudo xfs_growfs /
```

---

## **5. Root Volume Resizing**

Works while instance is running.

**Example: Increase root volume to 50 GiB**

```bash
aws ec2 modify-volume --volume-id vol-xxxxxxxx --size 50
```

Inside the instance:

```bash
lsblk
sudo growpart /dev/xvda 1
sudo resize2fs /dev/xvda1   # Or xfs_growfs for XFS
df -h
```

---

## **6. Data Volume Example (Partitioned)**

Increase `/dev/xvdf` from 10 GiB → 20 GiB:

```bash
aws ec2 modify-volume --volume-id vol-xxxxxxxx --size 20
```

Inside instance:

```bash
lsblk
sudo growpart /dev/xvdf 1   # If partitioned
sudo resize2fs /dev/xvdf1   # ext4 example
df -h
```

---

## **7. Special Notes & Limitations**

* **Snapshots First** – Always snapshot before modifying.
* **Performance Impact** – Modifications may temporarily degrade I/O until optimization completes.
* **Multi-Attach**:

  * Only **io1/io2** support it.
  * Only certain Nitro-based instance types.
  * Not supported on t2.micro and similar burstable instances.
* **OS Tools** – If `resize2fs` says:

  ```
  The filesystem is already XXX blocks long. Nothing to do!
  ```

  → Partition must be grown first (`growpart`).

---

## **8. Quick Command Reference Table**

| Action                    | Command                                                      |
| ------------------------- | ------------------------------------------------------------ |
| Modify volume size        | `aws ec2 modify-volume --volume-id vol-xxx --size <GiB>`     |
| Check modification status | `aws ec2 describe-volumes-modifications --volume-id vol-xxx` |
| List block devices        | `lsblk`                                                      |
| Grow partition            | `sudo growpart /dev/xvda 1`                                  |
| Resize ext4/ext3          | `sudo resize2fs /dev/xvda1`                                  |
| Resize XFS                | `sudo xfs_growfs /`                                          |
| Check free space          | `df -h`                                                      |

---

## **9. Exam-Critical Points for CCP & SAA**

* EBS resizing is **online** — no stop/detach needed.
* Only **increase** in size is possible.
* File system resize is **manual** at OS level.
* `growpart` is for expanding partitions; `resize2fs` or `xfs_growfs` is for expanding file systems.
* Always snapshot before modifications.
* Multi-Attach has strict **volume type** and **instance type** requirements.


<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>

## Q16. How can I attach one Amazon EBS volume to multiple EC2 instances?

### **What It Is**

* **Multi-Attach** allows a single EBS volume to be attached to **multiple EC2 instances** **within the same Availability Zone (AZ)**.
* All attached instances can **read and write simultaneously** to the same block device.
* Designed for **clustered or distributed applications** that manage concurrent disk writes.

---

## **Key Characteristics**

| Feature                       | Details                                             |
| ----------------------------- | --------------------------------------------------- |
| **Supported Volume Types**    | `io1`, `io2` (Provisioned IOPS SSD)                 |
| **Max Instances**             | 16 (same AZ)                                        |
| **Access Level**              | Block-level device (no file-level locking by EBS)   |
| **Boot Volume**               | ❌ Not supported                                     |
| **AZ Scope**                  | Must be in **same Availability Zone**               |
| **IOPS/Throughput**           | Shared across all attached instances                |
| **Multi-Attach Enablement**   | During creation, or after creation (only for `io2`) |
| **Instance Type Requirement** | Must support EBS Multi-Attach                       |

---

## **When to Use**

* **✅ Supported scenarios:**

  * Clustered applications that manage their own storage coordination (e.g., Oracle RAC, SAP HANA).
  * Shared cluster-aware file systems (e.g., GFS2, OCFS2) with proper locking.
  * High availability setups requiring shared block storage.

* **❌ Not for:**

  * General-purpose file systems without cluster-awareness (e.g., ext4, NTFS, XFS without coordination).
  * Applications that assume exclusive volume access — risk of data corruption.

---

## **Limitations & Considerations**

* No **automatic file system coordination** — your app or file system must handle it.
* Performance is capped at the **EBS volume's provisioned limits**, not multiplied by the number of instances.
* Not supported for **root (boot) volumes**.
* Cannot span multiple AZs.
* Must detach from all instances before disabling Multi-Attach.
* Snapshots are supported but not instantaneous; data consistency is your responsibility.

---

## **Performance Notes**

* **IOPS & throughput** are shared — if you have 10,000 IOPS provisioned, that’s total, not per-instance.
* Slightly higher latency than single-attach EBS volumes.
* For predictable high performance, use `io2` with **Provisioned IOPS**.
* Monitor with **Amazon CloudWatch**.

---

## **CLI Commands for Multi-Attach**

### 1️⃣ Create a Multi-Attach Enabled Volume

```bash
aws ec2 create-volume \
    --availability-zone us-east-1a \
    --size 100 \
    --volume-type io2 \
    --iops 1000 \
    --multi-attach-enabled
```

### 2️⃣ Enable Multi-Attach on Existing `io2` Volume

```bash
aws ec2 modify-volume \
    --volume-id vol-0123456789abcdef0 \
    --multi-attach-enabled
```

### 3️⃣ Disable Multi-Attach

```bash
aws ec2 modify-volume \
    --volume-id vol-0123456789abcdef0 \
    --no-multi-attach-enabled
```

> Must be **detached from all instances** first.

### 4️⃣ Attach to Multiple Instances

```bash
aws ec2 attach-volume \
    --volume-id vol-0123456789abcdef0 \
    --instance-id i-0123456789abcdef0 \
    --device /dev/sdf

aws ec2 attach-volume \
    --volume-id vol-0123456789abcdef0 \
    --instance-id i-0abcdef1234567890 \
    --device /dev/sdf
```

### 5️⃣ Set Delete on Termination

```bash
aws ec2 modify-instance-attribute \
    --instance-id i-0123456789abcdef0 \
    --block-device-mappings \
    "[{\"DeviceName\":\"/dev/sdf\",\"Ebs\":{\"DeleteOnTermination\":true}}]"
```

---

## **Best Practices**

* Always use **cluster-aware file systems** or application-level coordination to avoid corruption.
* Calculate IOPS & throughput needs in advance.
* Use **io2** for higher durability (99.999%) and predictable performance.
* Test thoroughly in staging before production.
* Monitor with **CloudWatch** for I/O metrics and latency.

---

## **Exam Tip Pointers**

* **CCP Level:**

  * Know that Multi-Attach allows multiple EC2 instances in the **same AZ** to access a single EBS volume.
  * Understand it’s **only for `io1` & `io2`**, not general-purpose (`gp2`, `gp3`).
  * File system must handle **concurrent access**.

* **SAA-C03 Level:**

  * Recognize **architectural patterns** — e.g., shared storage for clustered databases.
  * Know limitations: **same AZ**, no boot volumes, IOPS are shared.
  * Be aware of **durability/performance trade-offs** and when to use `io2` vs `io1`.
  * Remember that **Multi-Attach does not automatically coordinate writes** — that’s your job.


<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>

## Q17. Amazon EBS Volume Types 

Amazon Elastic Block Store (**EBS**) provides **persistent block-level storage** for Amazon EC2.
It’s **independent of the instance lifecycle**, meaning your data remains even after the EC2 instance is stopped or terminated.

EBS volumes fall into two main categories:

1. **SSD-backed (Solid State Drives)** – Optimized for **IOPS** (transactional workloads).
2. **HDD-backed (Hard Disk Drives)** – Optimized for **throughput** (large sequential workloads).

---

## **1. General Purpose SSD (gp2 & gp3)**

### **Overview**

* **Purpose**: Balanced price and performance for most workloads.
* **gp2** (older generation):

  * Baseline performance **3 IOPS per GiB**.
  * Can burst to **3,000 IOPS** for small volumes.
  * Performance **depends on volume size**.
* **gp3** (newer generation):

  * **Baseline**: 3,000 IOPS & 125 MB/s throughput **regardless of size**.
  * Can scale up to **16,000 IOPS** and **1,000 MB/s throughput**.
  * **Cheaper** than gp2.
* **Durability**: 99.8%–99.9% availability.

### **Use Cases**

* Boot volumes for EC2.
* Small/medium databases.
* Virtual desktops.
* Development/test environments.
* Low-latency applications.

---

## **2. Provisioned IOPS SSD (io1 & io2)**

### **Overview**

* **Purpose**: For **critical, I/O-intensive workloads** needing **sustained high performance**.
* **io1**: Older version.
* **io2**:

  * **Durability**: 99.999%.
  * Better performance & lower failure rates.
* **Performance**:

  * Up to **64,000 IOPS** per volume (on certain EC2 types).
  * Up to **1,000 MB/s throughput**.
* **Special Feature**: Supports **EBS Multi-Attach** (share volume with multiple EC2 instances in same AZ — only io1/io2).
* **Predictable ultra-low latency**.

### **Use Cases**

* Large relational/NoSQL databases (Oracle, SQL Server, MySQL, MongoDB, Cassandra).
* Business-critical, high-transaction applications.
* Apps needing **sub-millisecond latency**.

---

## **3. HDD-backed Volumes**

### **a. Throughput Optimized HDD (st1)**

* **Purpose**: For **frequently accessed**, throughput-intensive workloads.
* **Performance**:

  * Baseline: **40 MB/s per TiB**.
  * Burst: Up to **250 MB/s**.
* **Lower cost than SSD**.
* Cannot be used as **boot volumes**.

**Use Cases**

* Big data analytics.
* Data warehouses.
* Log processing.

---

### **b. Cold HDD (sc1)**

* **Purpose**: For **infrequently accessed**, large sequential datasets.
* **Performance**:

  * Baseline: **12 MB/s per TiB**.
  * Burst: Up to **80 MB/s**.
* **Lowest-cost EBS volume**.
* Cannot be used as **boot volumes**.

**Use Cases**

* Archival storage.
* Large, infrequently accessed datasets.
* Data that must remain online but is rarely used.

---

## **Feature Comparison Table**

| Feature                  | gp2        | gp3        | io1        | io2               | st1         | sc1              |
| ------------------------ | ---------- | ---------- | ---------- | ----------------- | ----------- | ---------------- |
| **Type**                 | SSD        | SSD        | SSD        | SSD               | HDD         | HDD              |
| **Optimized for**        | General    | General    | IOPS       | IOPS & durability | Throughput  | Low-cost storage |
| **Baseline Performance** | 3 IOPS/GiB | 3,000 IOPS | Custom     | Custom            | 40 MB/s/TiB | 12 MB/s/TiB      |
| **Max IOPS**             | 16,000     | 16,000     | 64,000     | 64,000            | N/A         | N/A              |
| **Max Throughput**       | 250 MB/s   | 1,000 MB/s | 1,000 MB/s | 1,000 MB/s        | 250 MB/s    | 80 MB/s          |
| **Boot Volume?**         | ✅          | ✅          | ✅          | ✅                 | ❌           | ❌                |
| **Multi-Attach?**        | ❌          | ❌          | ✅          | ✅                 | ❌           | ❌                |
| **Durability**           | 99.8–99.9% | 99.8–99.9% | 99.8–99.9% | 99.999%           | 99.8–99.9%  | 99.8–99.9%       |

---

## **Choosing the Right EBS Type – Exam Tip**

* **gp3/gp2** → Default choice for most workloads.
* **io1/io2** → Use when you need **consistent, very high IOPS** and low latency.
* **st1** → Best for **frequent, large, sequential data access**.
* **sc1** → Best for **archival / rarely accessed data** at lowest cost.
* **Boot volumes** → Must be **SSD-backed** (gp2, gp3, io1, io2).
* **Multi-Attach** → Only io1 & io2.


<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>

## Q18. Amazon EBS Snapshots

## **1. Definition**

Amazon Elastic Block Store (EBS) snapshots are **point-in-time backups** of EBS volumes. They are:

* Stored in **Amazon S3** (internally managed by AWS, not visible as normal S3 objects).
* Used for **backup, recovery, migration, and duplication** of EBS volumes.
* Designed for **business continuity, compliance, and disaster recovery**.

---

## **2. Key Features**

| Feature                                  | Description                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------ |
| **Point-in-time backup**                 | Captures the exact state of the volume at a specific moment.                         |
| **Incremental storage**                  | Only stores changed blocks since the last snapshot.                                  |
| **Cross-region & cross-account copying** | Enables disaster recovery and sharing.                                               |
| **Encryption support**                   | Inherits encryption from source volume or can be re-encrypted.                       |
| **Automated snapshots**                  | Integration with **AWS Backup** or **Data Lifecycle Manager (DLM)**.                 |
| **Multi-volume support**                 | Captures crash-consistent snapshots across multiple volumes attached to an instance. |

---

## **3. How Incremental Backups Work**

1. **First snapshot** → Captures all blocks from the volume.
2. **Subsequent snapshots** → Capture only changed blocks since the previous snapshot.
3. **Restoration** → AWS combines all required snapshots to reconstruct the full volume.
4. **Efficiency** → Saves storage cost and backup time.

---

## **4. Responsibilities of the User**

You are responsible for:

* Scheduling & managing snapshot creation.
* Taking snapshots before critical changes or maintenance.
* Setting a **retention policy** to control costs.
* Managing encryption keys (if using **AWS KMS**).

---

## **5. Snapshot Storage & Restoration**

### Storage in Amazon S3

* Stored **in AWS-managed S3**, not visible in your S3 buckets.
* AWS handles durability and availability.

### Restoration

* You can **create a new EBS volume** from a snapshot.
* Restoration is possible **within the same or different AZ** in the same region.
* **Fast Snapshot Restore (FSR)** provides low-latency performance immediately after restore (available per snapshot per AZ).

---

## **6. Snapshot Deletion Behavior**

* Deleting a snapshot **removes only the unique blocks** that are not referenced by other snapshots.
* Shared data blocks remain until **all referencing snapshots** are deleted.

---

## **7. Events & Multi-Volume Snapshots**

### CloudWatch Events Integration

* Event notifications for snapshot creation, completion, and failure.
* Useful for automation & monitoring.

### Multi-Volume Snapshots

* Capture crash-consistent state across all attached EBS volumes of an instance.
* Common for **databases and distributed applications**.

---

## **8. Pricing Considerations**

### Incremental Storage Charges

* You pay only for **unique data blocks** stored.
* No charge for copying itself, but storage of the copy is billed.

### Billing Notes

* Cost varies by AWS Region.
* Restoring from a snapshot is **free** (you only pay for the new EBS volume’s storage).
* **Cross-region copies** incur data transfer charges.

---

## **9. Copying Snapshots**

* Snapshots can be copied:

  * Within the same region.
  * To a different region (**cross-region disaster recovery**).
  * To another AWS account.
* **Multi-volume snapshot copies** maintain volume consistency.

---

## **10. Sharing Snapshots**

* **Unencrypted snapshots** can be:

  * Publicly shared.
  * Shared with specific AWS accounts.
* **Encrypted snapshots** require:

  * Sharing the AWS KMS key.
  * Permission for the other account to use the key.

---

## **11. Common Use Cases**

| Use Case              | Example                                                  |
| --------------------- | -------------------------------------------------------- |
| **Disaster recovery** | Quickly restore after accidental deletion or corruption. |
| **Migration**         | Move workloads between regions or accounts.              |
| **Testing**           | Create test/dev environments from production data.       |
| **Compliance**        | Maintain backups for regulatory requirements.            |

---

## **12. Encryption & Security**

* Snapshots of encrypted volumes are **always encrypted**.
* Copies of encrypted snapshots remain encrypted.
* Can be re-encrypted with a different KMS key during copy.
* Encryption applies to **data at rest** and **data in transit**.

---

✅ **Exam Tip (CCP & SAA-C03)**

* **EBS snapshots are region-specific** but can be copied to other regions.
* **Incremental backups** mean cost savings but still allow full restoration.
* You cannot **directly access** EBS snapshots from Amazon S3.
* **Fast Snapshot Restore (FSR)** is charged per snapshot per AZ and provides immediate performance.



<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>

## Q19. Creating the First Snapshot

### **1. Creating the First Snapshot**

An **EBS snapshot** is a **point-in-time, incremental backup** of an EBS volume stored in Amazon S3 (managed by AWS, not directly accessible like standard S3 objects).

#### **Key Defaults & Facts**

* **Storage**: Stored in Amazon S3 internally (you don’t see the bucket).
* **Incremental**: Only changed blocks are saved after the first snapshot.
* **Encryption**:

  * If the source volume is **encrypted**, the snapshot is also encrypted automatically.
  * If the source volume is **unencrypted**, the snapshot is unencrypted by default — you can encrypt it manually.
* **Region-bound**: Snapshots stay in the same region unless explicitly copied.
* **Volume type defaults**: If you create a new volume from a snapshot without specifying type, it defaults to the same type as the original volume.

#### **Steps (Console)**:

1. Go to **EC2 → Volumes**.
2. Select volume → **Actions → Create snapshot**.
3. Add name, description, tags.
4. **Check encryption setting** (important for exam).
5. Click **Create snapshot**.

---

### **2. Creating a Volume from an EBS Snapshot**

You can restore a volume from any available snapshot.

#### **Exam Points**:

* **Availability Zone (AZ)**: Must match the EC2 instance’s AZ if you want to attach directly.
* **Encryption**: If you create a new volume from an encrypted snapshot, it will **always be encrypted**.
* **Volume Type**: If not specified, it defaults to **gp2/gp3** (general purpose SSD).

**Steps**:

1. **EC2 → Snapshots** → Select → **Actions → Create volume**.
2. Choose:

   * AZ.
   * Volume type (gp3 is now default for many regions).
   * Size (can be bigger than snapshot).
3. Create and attach.

---

### **3. Automating EBS Snapshots**

**Options**:

* **Amazon Data Lifecycle Manager (DLM)** → Automates creation & deletion.
* **AWS Backup** → Centralized backup across AWS services.
* **Custom scripts with Lambda + CloudWatch Events**.

**Default behaviors**:

* DLM policies use tags to identify resources.
* Retention periods can be in **count-based** or **time-based** format.

---

### **4. Considerations for Snapshot Lifecycle Policies**

* **Cost**: You’re charged for snapshot storage in S3. Incremental saves cost, but too many snapshots = higher bills.
* **Encryption**: Managed with AWS KMS. Default key = **aws/ebs** unless custom CMK is selected.
* **Performance**: Restoring from a snapshot uses lazy loading — full performance after initial data access.
* **Cross-Region Copy**: Creates a separate snapshot in the target region for DR.
* **Cross-Account Copy**: Use snapshot sharing + copy.

---

### **5. Steps to Create Snapshot Policy (DLM)**

1. **EC2 → Lifecycle Manager → Create policy**.
2. Choose **EBS Snapshot Policy**.
3. Define:

   * Resource type.
   * Target tags.
4. Schedule frequency & retention.
5. Choose encryption settings.
6. Review & create.

---

### **6. Recycle Bin Retention Rules**

Lets you **recover accidentally deleted EBS snapshots**.

#### **How It Works**:

* Snapshots matching rules go to Recycle Bin when deleted.
* Retained for a set period (up to 1 year).
* You can restore within retention time.

#### **Setup Steps**:

1. **EC2 → Recycle Bin → Create retention rule**.
2. Resource type = Snapshot.
3. Choose:

   * Tag-based rule OR all-resource rule.
   * Retention period.
4. Save.

---

### **7. Recovery from Recycle Bin**

**Steps (Console)**:

1. **EC2 → Recycle Bin**.
2. Select snapshot → **Recover**.
3. Snapshot returns to active state.

---

## **Extra Exam-Focused Notes**

These tend to appear in **CCP** and **SAA-C03** questions:

* **Default EBS Volume Type**: gp3 in most regions (used to be gp2).
* **Snapshots Are Region-Specific**: Must copy to another region for DR.
* **Encryption Defaults**:

  * Creating an encrypted snapshot from an unencrypted volume requires explicit choice.
  * Encrypted snapshots can only produce encrypted volumes.
* **Snapshot Pricing**: Based on GB-month stored in S3; data transfer out of AWS costs extra.
* **Performance on Restore**: Data is lazily loaded; initial access may have higher latency until all blocks are pulled in.
* **Fast Snapshot Restore (FSR)**: Optional, removes lazy-loading delays but costs extra.
* **First Snapshot Full, Rest Incremental**: Saves cost & speeds up backups.
* **Copy Snapshot Across Accounts**: Must set **sharing permissions** first.
* **AMI Creation from Snapshot**: An EBS-backed AMI uses snapshots under the hood.
* **Recycle Bin Only Protects Future Deletions**: Not retroactive.


<div align="right">
    <b><a href="#readme">↥ back to top</a></b>
</div>

## Q20. Creating the First Snapshot
