# Example Usage - Email Job
`./ccr 
Usage: index email-background [options]

Options:
  -d, --debug                              output extra debugging
  -f, --functionId <functionId>            Relation ID
  -h, --host <host>                        Host
  -k, --apikey <apiKey>                    API Key
  -r, --relationId <relationID>            Relation ID
  --text <text>                            The text body of the email
  --html <html>                            The HTML body of the email
  --templateTextId <templateTextlId>       The TEXT template ID
  --templateHtmlId <templateHtmlId>        The HTML template ID
  --subject <subject>                      The email subject
  --toEmailAddressKey <toEmailAddressKey>  The email address key
  --help                                   display help for command


# eg
'ts-node' src/index.ts email-background -d -h http://localhost:8910 --subject "hello world" --relationId fadf -k test --toEmailAddressKey email --html "html text test" --templateHtmlId f93b7c9f-51af-4414-94f4-1dfef3823b79 --text "the test text text" --templateTextId f93b7c9f-51af-4414-94f4-1dfef3823b79


This scripts will then return the job id associated with the email job and the status of the job can be tracked at:

`https://<instance>.ccrhub.net/.netlify/functions/job-status?jobId=<jobID>`

# To view the status of the job:

`https://<instance>.ccrhub.net/job/status/<jobID>`
