function checkIsContributor(profile) {
  if (!profile) {
    return false
  }
  if (profile.organization_id) {
    return profile.organization_role === 2
  }
  if (
    profile.permissions &&
    typeof profile.permissions.indexOf !== 'undefined'
  ) {
    return profile.permissions.indexOf('profile_edit') === -1
  }
  return false
}

module.exports = profile => ({
  id: profile.id,
  avatarUrl: profile.avatar_https,
  avatar_https: profile.avatar_https,
  type: profile.service,
  handle: profile.service_username,
  isManager: profile.organization_role === 1,
  pendingCount: profile.counts.pending,
  sentCount: profile.counts.sent,
  timezone: profile.timezone,
  timezone_city: profile.timezone_city,
  schedules: profile.schedules,
  pausedSchedules: profile.paused_schedules,
  service: profile.service,
  service_type: profile.service_type,
  serviceUsername: profile.service_username,
  service_username: profile.service_username,
  should_post_direct: profile.should_post_direct,
  formatted_username: profile.formatted_username,
  subprofiles: profile.subprofiles,
  disabled: profile.disabled,
  business: profile.business,
  default: profile.default,
  paused: profile.paused,
  open: false,
  organizationRole: profile.organization_role,
  directPostingEnabled: profile.direct_posting_enabled,
  googleAnalyticsEnabled: profile.preferences.utm_tracking,
  isContributor: checkIsContributor(profile),
})
