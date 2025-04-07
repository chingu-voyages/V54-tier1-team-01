## Prompt Engineering

https://scrimba.com/intro-to-ai-engineering-c032

## Gemini

### Gemini Studio

https://aistudio.google.com/u/1/apikey (the key will be the same for any model you use)

https://ai.google.dev/gemini-api/docs/api-key#windows

The example code in Gemini Studio RUNS ONLY ON Linux / Unix (MS 'curl' has different naming for arguments!!!)

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-8b:generateContent?key=GEMINIAPIKEY" -H 'Content-Type: application/json' -X POST -d '{"contents": [{"parts":[{"text": "Explain how AI works"}]}]}'
```

#### Testing our possible evaluation prompt

It might take some parsing...

"Is the following promt pentagram-compliant?\n'You are a friendly customer service representative for a leading tech company. The response will be used as part of a troubleshooting guide. Write an email explaining the benefits of upgrading to a premium subscription. Provide a detailed list of items in a CSV format.'\nAssume all the components should be explicitly declared, don't accept if any component is implicit.\nIf there is a missing or wrong pentagram component in that prompt, provide a report in HTML. The report should looks like following:\n<p><strong>Missing Components:</strong></p><ul><li><strong>Persona:</strong><p>Who should the AI be acting as? (e.g., an expert in AI prompting, a teacher, etc.)</p></li><li><strong>Output:</strong><p>What specific format or style is desired? (e.g., a step-by-step guide, a concise summary, etc.)</p></li><li><strong>Constraints:</strong><p>Are there any limitations on the explanation? (e.g., avoid technical jargon, keep it brief, etc.)</p></li></ul>"

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-8b:generateContent?key=GEMINIAPIKEY" -H 'Content-Type: application/json' -X POST -d '{"contents": [{"parts":[{"text": "Is the following promt pentagram-compliant?:\n >> You are a friendly customer service representative for a leading tech company. The response will be used as part of a troubleshooting guide. Write an email explaining the benefits of upgrading to a premium subscription. Provide a detailed list of items in a CSV format. <<\nAssume all the components should be explicitly declared, do not accept if any component is implicit. If there is a missing or wrong pentagram component in the prompt provide a report in HTML format."}]}]}'
```

Best unicode (hex) decoder for the response in HTML: https://magictool.ai/tool/unicode-decoder-encoder/

### Quick Start

https://ai.google.dev/gemini-api/docs/quickstart

### API Key Security

https://www.youtube.com/watch?v=Od7YwGqBik8&t
https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public

### References and Learning Resources

https://github.com/chingu-voyages/V54-tier1-team-01/issues/16

https://www.youtube.com/watch?v=nCEsIbfoLJM

## firebase

Risks of an Exposed API Key

Even though Firebase Security Rules protect your database and storage, a compromised API key can still be misused. Here's what an attacker could potentially do:

Abuse Authentication Services: They could use your API key to make unauthorized calls to Firebase Authentication endpoints, potentially attempting brute-force attacks, creating fake accounts, or locking out legitimate users if you are using password-based authentication.

Impersonate Your App: The API key is used to identify your application. Someone could embed it in their own malicious app and potentially impersonate your app to access other services.

Impact Google Analytics data: Because your project is integrated with Google Analytics, bad actors may be able to take advantage of this exposure to affect your data.

How to Replace Your API Key

The best course of action is to generate a new API key and restrict the old one to minimize potential damage. Here's the process:

Generate a New API Key:

Go to the Google Cloud Console API & Services  . Note that Firebase uses the Google Cloud Console for API key management.

Select your project (geminisecuritychingu54-1-1-a).

Click "+ Create credentials" at the top.

Choose "API key".

The console will generate a new API key for you.

Restrict the New API Key: (This is Crucial!)

In the same API & Services Credentials page in the Google Cloud Console, click on the newly created API key.

Under "API restrictions," select "Restrict key."

Choose "Firebase APIs" from the dropdown. This will limit the key's usage to Firebase services only.

You can also add application restrictions based on your platform:

Web Apps: Add HTTP referrers (websites). Specify the domains where your web app is hosted (including localhost for development and your App Hosting domains).

Update Your Application Code:

Firebase Web Apps: Replace the old API key with the new one in your Firebase configuration object ( apiKey field).

Firebase Apple Apps: Replace the old API key in the GoogleService-Info.plist file ( API_KEY field).

Firebase Android Apps: Replace the old API key in the google-services.json file ( current_key field).

Tighten quota:

You can tighten the default quota of the identitytoolkit.googleapis.com endpoints to reflect the normal traffic expectations of your app. You can change your project's API quotas in the Google Cloud console  .

Monitor:

Keep a close eye on your Firebase project in the console for any unusual activity, particularly in Authentication, Realtime Database, Cloud Firestore, and Cloud Storage.

Set up alerts in Google Cloud Monitoring for any suspicious API usage patterns.

Important Considerations:

Firebase Security Rules: Double-check that your Firebase Security Rules are properly configured and are restricting access to your database and storage. This is your primary defense against data breaches.

No-cost plan limitations: On the no-cost plan, you may not be able to apply all the restrictions, and the impact may be different if your project has limited resources.

Automation: For larger applications, consider automating API key rotation and management using tools like HashiCorp Vault or similar secrets management solutions.

By following these steps, you'll minimize the potential damage from the exposed API key and secure your Firebase project.

## Additional Considerations

### Prompts resident on the app??? ==> chat

https://aistudio.google.com/app/prompts

### Cost metrics

![costs](image_screenshot_costs.png)