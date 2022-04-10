# Example Usage - Email Job
`./start-email-job.sh -h https://<instance>.ccrhub.net -k <apikey> -r <relationId>`

# eg

`./start-email-job.sh -h https://dev.ccrhub.net -k abc123 -r TEST_EMAIL_RELATION`


This scripts will then return the job id associated with the email job and the status of the job can be tracked at:

`https://<instance>.ccrhub.net/.netlify/functions/job-status?jobId=<jobID>`

# To view the status of the job:

`https://<instance>.ccrhub.net/job/status/<jobID>`
