#!/bin/bash -x


while getopts "h:f:k:r:" arg; do
    case $arg in
        h)
					host=$OPTARG
				;;
        f)
					file=$OPTARG
				;;
        k)
					apikey=$OPTARG
				;;
        r)
					relationId=$OPTARG
				;;
    esac
done




signedUrl=`curl "$host"/.netlify/functions/filestore-request \
  -X 'POST' \
  -H 'Content-Type: application/json' \
  -H 'Connection: keep-alive' \
  -H 'X-API-KEY: '$apikey \
  --data '{"relationId":"'"$relationId"'","filename":"'"$file"'"}' \
 | jq -r .signedUrl`

exit_status=$?
if [ $exit_status -eq 1 ]; then
    echo "failed to get signed URL"
    exit $exit_status
fi

echo $signedUrl

curl "$signedUrl" -X PUT --upload-file "$file" --compressed

exit_status=$?
if [ $exit_status -eq 1 ]; then
    echo "failed to upload"
    exit $exit_status
fi


jobId=`curl "$host"'/.netlify/functions/job-starter' \
  -H 'Content-Type: application/json' \
  -H 'X-API-KEY: '"$apikey" \
  --data '{"functionId":"upload-background","relationId":"'"$relationId"'","fileName":"'"$file"'"}' \
  --compressed | jq -r .jobId`

echo 'Queued jobId:' "$jobId"
