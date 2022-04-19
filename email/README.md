# Example Usage - Email Job
  `./ccr
  Usage: ccr email-background [options]

  Options:
    -d, --debug                                  output extra debugging
    -h, --host <host>                            Host (required)
    -k, --apikey <apiKey>                        API Key (required)
    -r, --relationId <relationID>                Relation ID (required)
    --subject <subject>                          The email subject (required)
    --toEmailAddressKey <toEmailAddressKey>      The email address key (required)
    --text <text>                                The text body of the email
    --html <html>                                The HTML body of the email
    --templateTextId <templateTextlId>           The TEXT template ID
    --templateHtmlId <templateHtmlId>            The HTML template ID
    --replyToEmailAddress <replyToEmailAddress>  The reply email address (defaults to: "No Reply"
                                                 noreply@<instance>.ccrhub.net is used
    --help                                       display help for command
# eg
ccr email-background -d -h http://localhost:8910 --subject "hello world" --relationId fadf -k test --toEmailAddressKey email --html "html text test" --templateHtmlId f93b7c9f-51af-4414-94f4-1dfef3823b79 --text "the test text text" --templateTextId f93b7c9f-51af-4414-94f4-1dfef3823b79 --replyToEmailAddress reply@yourcompany.com


If no html/text templateId is provided, the email subsystem will send the provided html and text as is.

If html/text templateId is provided, the resultant html/text will be replaced.



This scripts will then return the job id associated with the email job and the status of the job can be tracked at:

`https://<instance>.ccrhub.net/.netlify/functions/job-status?jobId=<jobID>`

# To view the status of the job:

`https://<instance>.ccrhub.net/job/status/<jobID>`
