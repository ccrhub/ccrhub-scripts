#!/bin/bash -x


while getopts "h:f:F:k:r:" arg; do
    case $arg in
        h)
					host=$OPTARG
				;;
        k)
					apikey=$OPTARG
				;;
        r)
					relationId=$OPTARG
				;;
				f)
					fileName=$OPTARG
				;;
				 F)
					format=$OPTARG
				;;
    esac
done




jobId=`curl "$host"/.netlify/functions/job-starter  \
  -X 'POST' \
  -H 'Content-Type: application/json' \
  -H 'Connection: keep-alive' \
  -H 'X-API-KEY: '$apikey \
  --data '{"functionId":"export-background","relationId":"'"$relationId"'","fileName":"'"$fileName"'","format":"'"$format"'"}' \
 | jq -r .jobId`

exit_status=$?
if [ $exit_status -eq 1 ]; then
    echo "failed to get jobID"
    exit $exit_status
fi

echo $jobId

echo 'Queued jobId:' "$jobId"

while [ "$(curl "$host"/.netlify/functions/job-status?jobId=$jobId \
  -X 'GET' \
  -H 'Content-Type: application/json' \
  -H 'Connection: keep-alive' \
  -H 'X-API-KEY: '$apikey \ | jq -r .status)" != "COMPLETED" ]; do
  echo -n '...job not finished..sleep 10 seconds'
  sleep 10
done

downloadUrl=`curl "$host"/.netlify/functions/job-status?jobId=$jobId \
  -X 'GET' \
  -H 'Content-Type: application/json' \
  -H 'Connection: keep-alive' \
  -H 'X-API-KEY: '$apikey \ | jq -r .result.downloadUrl`

curl $downloadUrl --output $fileName
