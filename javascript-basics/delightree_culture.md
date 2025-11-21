## Q1. “Tell me about a production issue you handled end-to-end.”

They want to see:

Calm under pressure | Clear thinking | Ownership | Technical + communication blend

### Situation:
Recently in production, we saw a spike in payment failures. I was on call, so I immediately took ownership of the issue.

### Task:
My goal was to quickly understand whether this was an isolated failure or a system-wide incident, identify the root cause, and restore payment functionality.

### Action:
The first thing I checked was whether only one transaction failed or if all payments were affected. When the team confirmed that every payment was failing, I ruled out a code regression because I had been working in that area recently and nothing had changed.
I moved to analyzing logs and metrics from our payment gateway. The status codes clearly showed that the payment provider was declining all requests. I validated the API keys and noticed that the provider was rejecting them. I immediately communicated the findings to the client and asked them to check their account configuration. They discovered a KYC-related issue on their side that caused the provider to block all transactions.

### Result:
Once the client resolved their KYC issue, payments started succeeding again. The total time from detection to full recovery was around 30 minutes. Throughout the incident, I kept the team updated, documented the root cause, and added a quick validation step in our monitoring so we can catch this earlier next time.
