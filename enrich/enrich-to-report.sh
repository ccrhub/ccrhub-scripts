#!/bin/bash -x


while getopts "h:e:k:r:f:" arg; do
    case $arg in
        h)
					host=$OPTARG
				;;
        k)
					apikey=$OPTARG
				;;
        e)
					enricherId=$OPTARG
				;;
        r)
					reportId=$OPTARG
				;;
        f)
					fileName=$OPTARG
				;;
    esac
done


jobId=`curl "$host"'/.netlify/functions/job-starter' \
  -H 'Content-Type: application/json' \
  -H 'X-API-KEY: '"$apikey" \
  --data '{"functionId":"enrich-to-report-background","reportId":"'"$reportId"'","enricherId":"'"$enricherId"'"}' \
  --compressed | jq -r .jobId`

echo 'Queued JobId:' "$jobId"
