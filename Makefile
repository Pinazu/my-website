include .env
export

deploy:
	bun run build.ts
	aws s3 sync dist/ s3://${S3_BUCKET_NAME} --delete
	aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*"