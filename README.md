# Notification System Templates
Repository for storing Notification System templates.

Please use the following folder structure to store templates:
`{MessageType}/{TemplateName}/{Localization}.{ext}`

where `{MessageType}` can be:

+ Emails
+ Sms
+ PushNotifications

`{TemplateName}` is a unique template identificator, for ex. PasswordResetLinkEmail, PasswordResetLinkEmailSubject, LeadApprovedSms and etc.

`{Localization}` is {lang code ISO 639-1}(-{lang region ISO 3166-1}, optional), for example: en, en-US, bg, ru, sr and etc.

`{Ext}` is the extension of the file - html, txt and etc.


**All templates should be described in the confluence page - List of Notification Templates**

# Email Templates Development
recommended version of node is 12 for now
`npm i` - to install packages
`gulp` - will launch `gulp pug` task
`gulp watch` - realtime recompilation on any change in .pug or .html files under Emails folder
