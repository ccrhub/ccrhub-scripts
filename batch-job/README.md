# Example Usage - Enrich to Relation

`./start-batch-job.sh -h https://<instance>.ccrhub.net -k <apikey> -r <relationId> -b <batchJobId>`

# eg

`./start-batch-job.sh -h https://dev.ccrhub.net -k abc123 -b 121809af-0251-422f-984e-877ac769cb4c`


This scripts will then return the job id associated with the batch job and the status of the job can be tracked at:

`https://<instance>.ccrhub.net/.netlify/functions/job-status?jobId=<jobID>`

# To view the status of the job:

`https://<instance>.ccrhub.net/job/status/<jobID>`
