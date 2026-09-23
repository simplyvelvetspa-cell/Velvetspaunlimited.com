# Simply Velvet Spa mobile app

Native iOS and Android client app for Simply Velvet Spa, built with Expo and React Native.

## Included in the first release

- Square booking and payment handoff
- Five immersive spa room experiences
- Eight-question personalized experience finder
- V.Elevate membership, package, and rewards area
- Gift card entry point
- Secure on-device client intake draft
- Opt-in weekly wellness notifications
- Expo Router navigation and EAS configuration for Apple App Store and Google Play builds

## Local preview

```bash
npm install
npx expo start
```

Scan the QR code with a development build. Notification behavior should be tested on a physical device.

## Store preparation

1. Sign in to the business Expo account and run `eas init`. Replace `REPLACE_AFTER_EAS_INIT` in `app.json` with the assigned project ID.
2. Confirm that `com.velvetspaunlimited.app` is available in Apple Developer and Google Play Console.
3. Supply the final privacy-policy URL, support URL, Square gift-card URL, and membership/package checkout URLs.
4. Replace the current starter artwork with final 1024×1024 brand artwork and prepare store screenshots.
5. Run `eas build --platform all --profile production`.
6. Run `eas submit --platform ios` and `eas submit --platform android`, then complete each store listing and review questionnaire.

## Privacy boundary

The current intake draft is encrypted through the operating system's secure storage and remains on the client's device. Do not transmit health information to email or a public form. A production submission workflow must use an approved private destination and a reviewed privacy policy.
