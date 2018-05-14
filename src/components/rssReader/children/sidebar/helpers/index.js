export function hasFeed (feeds, name, url) {
  return feeds.find((feed) => {
    return feed.name === name || feed.url === url
  })
}
