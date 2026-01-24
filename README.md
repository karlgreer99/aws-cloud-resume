# My Cloud Resume Project 

I built this project to challenge myself with cloud technology. I wanted to build something real on AWS.

You can see my live site here: [karlgreeraws.com](https://karlgreeraws.com/)

## Why I Built This:
I have been into tech my whole life. Building custom PCs and launching Shopify stores. After a successful career in hospitality management. I built this project to prove that I can combine my lifelong technical aptitude with professional cloud infrastructure skills.

## How It Works
This isn't just a basic HTML page. I treated it like a production app:
* **Hosting:** The files live in an **AWS S3** bucket.
* **Security:** I hated seeing the "Not Secure" warning in browsers, so I set up **AWS CloudFront** to force HTTPS.
* **Certificates:** I learned that I needed to be in the `us-east-1` region to generate global certificates with **ACM (Amazon Certificate Manager)**!
* **DNS:** Configured **Route 53** to point my custom domain to the CloudFront distribution.

## Tech Stack
* **AWS:** S3, CloudFront, Route 53, ACM
* **Code:** HTML5, CSS3, JavaScript
