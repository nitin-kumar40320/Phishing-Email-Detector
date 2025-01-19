# Phishing-Email-Detector
This repository contains a machine learning model designed to classify emails as phishing or legitimate. The model is integrated with a Chrome extension to provide real-time phishing detection within the Gmail web interface, using a chrome extension.

# Overview
Phishing attacks are deceptive attempts to obtain sensitive information by masquerading as trustworthy communications. Most People just open their emails and tend to download all the attachments directly, thus falling victims to phishing attacks. This project aims to mitigate such threats by employing a machine learning model that analyzes email content to detect phishing attempts. The model is accessible through a Chrome extension, allowing users to assess emails directly within Gmail.

# Model Details
The phishing email classifier is built using a machine learning algorithm trained on a labeled dataset of phishing and legitimate emails. The model analyzes various features extracted from the email content to determine the likelihood of a phishing attempt.

## Key Features:
  - Text Analysis: Examines the email body, subject, and sender information to identify common phishing indicators.
  - Machine Learning Algorithm: Utilizes a trained model to classify emails based on learned patterns from the dataset.
  - Real-Time Detection: Integrated with a Chrome extension to provide immediate feedback on email safety within Gmail.

# Dataset
The model is trained on a comprehensive dataset comprising phishing and legitimate emails. The dataset includes features such as email body text, subject lines, and sender information. For getting the data, pls refer to the `data/` directory.


P.S.- I have yet not deployed this extension due to lack of several resources to host the server and fee for extension upload on chorme.
