// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export enum StatusCodes {
  OK = 200,
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  REQUEST_TOO_LONG = 413,
  INTERNAL_SERVER_ERROR = 500,
  TIMEOUT = 503,
}

export enum RequestTypes {
  DEFAULT = "Default",
  CUSTOM = "Custom",
  THUMBOR = "Thumbor",
}

export enum ImageFormatTypes {
  JPG = "jpg",
  JPEG = "jpeg",
  PNG = "png",
  WEBP = "webp",
  TIFF = "tiff",
  HEIF = "heif",
  HEIC = "heic",
  RAW = "raw",
  GIF = "gif",
  AVIF = "avif",
}

export enum ImageFitTypes {
  COVER = "cover",
  CONTAIN = "contain",
  FILL = "fill",
  INSIDE = "inside",
  OUTSIDE = "outside",
}

export enum ContentTypes {
  PNG = "image/png",
  JPEG = "image/jpeg",
  WEBP = "image/webp",
  TIFF = "image/tiff",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  AVIF = "image/avif",
}

export const BucketEnum = {
  "static.makealive.com": "static.makealive.com",
  "static.mirrorweare.com": "static.mirrorweare.com",
  "makerville.hk": "makerville.hk",
  "www.makerville.hk": "makerville.hk",
  "prerender.makerville.hk": "prerender.makerville.hk",
  "www-dev.makerville.hk": "www-dev.makerville.hk",
} as const