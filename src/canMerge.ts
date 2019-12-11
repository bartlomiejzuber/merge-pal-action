import Octokit = require('@octokit/rest')

export function canMergeByMergeable(pr: Octokit.PullsGetResponse) {
    return pr.mergeable
}
export default function canMerge(
    pr: Octokit.PullsGetResponse,
    whitelist: string[],
    blacklist: string[],
) {
    const byMergeable = canMergeByMergeable(pr)
    console.log('by mergeable', byMergeable)
    return byMergeable
}
