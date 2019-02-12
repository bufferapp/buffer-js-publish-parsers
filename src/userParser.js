module.exports = userData => ({
  id: userData.id,
  email: userData.email,
  features: userData.features,
  hasTwentyFourHourTimeFormat: userData.twentyfour_hour_time,
  imageDimensionsKey: userData.imagedimensions_key,
  // Same logic as user_model.php#onBusinessPlan()
  is_business_user:
    userData.features.includes('improved_analytics') ||
    (userData.plan_code >= 10 && userData.plan_code <= 19),
  is_free_user: userData.plan === 'free',
  messages: userData.messages || [],
  new_contributions_emails_subscribe_link:
    userData.new_contributions_emails_subscribe_link,
  skip_empty_text_alert: userData.messages.includes(
    'remember_confirm_saving_modal',
  ),
  profile_groups: userData.profile_groups || [],
  s3_upload_signature: userData.s3_upload_signature,
  uses_24h_time: userData.twentyfour_hour_time,
  week_starts_monday: userData.week_starts_monday,
  has_ig_direct_flip: userData.features.includes('instagram_direct_posting'),
  twofactor: userData.twofactor,
  has_simplified_free_plan_ux: userData.features.includes(
    'has_simplified_free_plan_ux',
  ),
  hasIGLocationTaggingFeature: userData.features.includes(
    'instagram-location-tagging',
  ),
  hasIGDirectVideoFlip: userData.features.includes('ig_direct_video_posting'),
  hasIGThumbnailVideoFlip: userData.features.includes('instagram_thumbnail'),
  profile_limit: userData.profile_limit,
  profiles_schedules_slots: userData.profiles_schedules_slots,
  hasNewPublish: userData.in_new_publish_rollout,
  hasEmailNotifications: {
    bufferEmpty: userData.email_notifications.includes('buffer_empty'),
    bufferTips: userData.email_notifications.includes('buffer_tips'),
    updateFailures: userData.email_notifications.includes('update_failures'),
    updateSuccesses: userData.email_notifications.includes('update_successes'),
    weeklyDigests: userData.email_notifications.includes('weekly_digests'),
    newContributions: userData.email_notifications.includes(
      'new_contributions',
    ),
    postMovedBackToDrafts: userData.email_notifications.includes(
      'post_moved_back_to_drafts',
    ),
    celebrations: userData.email_notifications.includes('celebrations'),
  },
})
