# Example Usage - Enrich to Relation

`./enrich-to-relation.sh -h https://<instance>.ccrhub.net -k <apikey> -r <relationId> -e <enricherId>`

# eg

`./enrich-to-relation.sh -h https://dev.ccrhub.net -k abc123 -r TEST_RELATION -e 121809af-0251-422f-984e-877ac769cb4c`

# Example Usage - Enrich to Report

`./enrich-to-report.sh -h https://<instance>.ccrhub.net -k <apikey> -r <reportId> -e <enricherId>`

# eg

`./enrich-to-report.sh -h https://dev.ccrhub.net -k abc123 -r 5acbc45b-326d-426b-a328-a8d63ab59ab -e 7762e0de-9417-4c6a-b960-e6b37d2572a7`

Both scripts will then poll for the job to finish and will download the file once the job is complete.

`https://<instance>.ccrhub.net/.netlify/functions/job-status?jobId=<jobID>`

# To view the status of the job:

`https://<instance>.ccrhub.net/job/status/<jobID>`
