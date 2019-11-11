import React from "react";
import { Markdown } from "components";

const main = `
React Finland is committed to protecting your privacy. This privacy policy represents our privacy practices. Please take time to review our practices. If there are any practice matters that do not suit your consent, we recommend not using this site.

## Party Responsible for Processing Data

\`\`\`
Toni Ristola
React Finland ry
Lauttasaarentie 16 A 17
00200 Helsinki
\`\`\`

**info <at> react-finland.fi**

The responsible party is the natural or legal person who jointly with others decides on the purposes and means of processing personal data (names, email addresses, etc.).

## Collecting information

We collect information from you when you register on our site or fill out a form. When filling out our contact form you may be asked to enter your name, e-mail, and phone number. Please do not submit your personal information if you would not like us to collect it.

## Using your information

We will use your personal information for the following purposes:

* Personalizing our website. We would like to create the best experience for you. By using your personal information, we are able to cater our site towards your needs.
* Improving our website. Through the information and feedback given, we are able to improve our site thanks to your insights.
* Improving customer service. Your information will allow us to create a more effective customer service experience by utilizing the data provided.

## Revocation of your consent to the processing of your data

Many data processing operations are only possible with your express consent. You may revoke your consent at any time with future effect. An informal email making this request is sufficient. The data processed before we receive your request may still be legally processed.

## Information, blocking, deletion

As permitted by law, you have the right to be provided at any time with information free of charge about any of your personal data that is stored as well as its origin, the recipient and the purpose for which it has been processed. You also have the right to have this data corrected, blocked or deleted. You can contact us at any time using the address given in our legal notice if you have further questions on the topic of personal data.

## Third Party Services

Depending on what features and services you use we store different data.

### Netlify

The website is hosted via the service Netlify. By visiting the website Netlify stores access logs including the IP addresses, stored for less than 30 days. Learn more in [Netlify Privacy Statement](https://www.netlify.com/privacy/).

### Fienta

We use Fienta to manage and process the tickets of the conference. An up to date compilation of the personal data they collect and for how long they retain it can be found in their [Fienta Privacy Statement](https://fienta.com/privacy).

### Stripe

If you purchase a ticket the payment is handled by Stripe. They store the cardholder name, email address, unique customer identifier, order ID, bank account details, payment card details, card expiration date, CVC code, date/time/amount of transaction, merchant name/ID and location. For further details please see the [Stripe Privacy Statement](https://stripe.com/at/privacy/).

### Mailchimp

If you would like to receive our newsletter, we require a valid email address as well as information that allows us to verify that you are the owner of the specified email address and that you agree to receive this newsletter. No additional data is collected or is only collected on a voluntary basis. We only use this data to send the requested information and do not pass it on to third parties.

We will, therefore, process any data you enter onto the contact form only with your consent. You can revoke consent to the storage of your data and email address as well as their use for sending the newsletter at any time, e.g. through the "unsubscribe" link in the newsletter. The data processed before we receive your request may still be legally processed.

The data provided when registering for the newsletter will be used to distribute the newsletter until you cancel your subscription when said data will be deleted. Data we have stored for other purposes (e.g. email addresses for tickets) remain unaffected.

For further details please see the [Mailchimp Privacy Statement](https://mailchimp.com/legal/privacy/).

### Google Drive

Google Drive is used to store and edit our internal documents. Some of these documents contain names, email addresses, payment information, company information and profile pictures collected when a ticket is purchased. Learn more in [Google Privacy Policy](https://policies.google.com/privacy?hl=en-GB).

### Amazon Web Services

Amazon Web Services are used to manage the domains (DNS) and emails. Some of the emails contain private information including email addresses and names. Learn more from [Amazon Privacy Notice](https://aws.amazon.com/privacy/). See also [Amazon Privacy FAQ](https://aws.amazon.com/compliance/data-privacy-faq/).

## Questions and Feedback

We try to keep our privacy policy transparent and easy to understand. In case you have any questions or do not understand parts of it, please let us know if we can improve it further or if you have any other questions: **info <at> react-finland.fi**.

## Changes

We reserve the right to update or modify this Privacy Policy from time to time without prior notice. Please review this document especially before you provide any information. This Privacy Policy was last updated on the date indicated below. Your continued use of the Services after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.

The last update to our Privacy Statement was posted on March 5th, 2019.
`;

const PrivacyPolicy = () => (
  <section className="intro intro_privacy">
    <div className="intro--main">
      <Markdown source={main} />
    </div>
  </section>
);

export default PrivacyPolicy;
