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
					relationId=$OPTARG
				;;
    esac
done


jobId=`curl "$host"'/.netlify/functions/job-starter' \
  -H 'Content-Type: application/json' \
  -H 'X-API-KEY: '"$apikey" \
  --data '{"functionId":"enrich-to-relation-background","relationId":"'"$relationId"'","enricherId":"'"$enricherId"'"}' \
  --compressed | jq -r .jobId`

echo 'Queued JobId:' "$jobId"
