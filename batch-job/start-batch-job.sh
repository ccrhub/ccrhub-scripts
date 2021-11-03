#!/bin/bash -x


while getopts "h:e:k:b:" arg; do
    case $arg in
        h)
					host=$OPTARG
				;;
        k)
					apikey=$OPTARG
				;;
        b)
					batchJobId=$OPTARG
				;;
    esac
done


jobId=`curl "$host"'/.netlify/functions/job-starter' \
  -H 'Content-Type: application/json' \
  -H 'X-API-KEY: '"$apikey" \
  --data '{"functionId":"batch-job-background","batchJobId":"'"$batchJobId"'"}' \
  --compressed | jq -r .jobId`

echo 'Queued JobId:' "$jobId"
