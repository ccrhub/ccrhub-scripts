# Example Usage

`./export.sh -h https://<instance>.ccrhub.net -k <apikey> -r <relationId> -f <fileName> -F [CSV|JSON]`

# eg

`./export.sh -h https://dev.ccrhub.net -k abc123 -r TEST_RELATION -f exported-reation-test.csv -F CSV`

The script will then poll for the job to finish and will download the file once the job is complete.

`https://<instance>.ccrhub.net/.netlify/functions/job-status?jobId=<jobID>`

# To view the status of the job:

`https://<instance>.ccrhub.net/job/status/<jobID>`
