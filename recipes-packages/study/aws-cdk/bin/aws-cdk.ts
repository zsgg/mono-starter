#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkStack } from '../lib/aws-cdk-stack';

const app = new cdk.App();
new AwsCdkStack(app, 'AwsCdkStack', {
    env: {
        account: '673033778032',
        region: 'ap-northeast-2',
    },
});
