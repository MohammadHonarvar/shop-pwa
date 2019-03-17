export const config = {
  api: {
    baseUrl: 'https://api.parsian.shop',
  }
}

export const getImageUrl = (image) => {
  if (image && image.url) {
    return config.api.baseUrl + image.url;
  }
  else {
    return undefined;
  }
}
