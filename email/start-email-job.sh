#!/bin/bash -x


while getopts "h:k:r:" arg; do
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
    esac
done


jobId=`curl "$host"'/.netlify/functions/job-starter' \
  -H 'Content-Type: application/json' \
  -H 'X-API-KEY: '"$apikey" \
  --data '{"functionId":"email-background","relationId":"'"$relationId"'"}' \
  --compressed | jq -r .jobId`

echo 'Queued JobId:' "$jobId"
