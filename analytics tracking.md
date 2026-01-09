# Google Analytics Tracking Implementation

## Overview
Google Analytics (GA4) tracking has been fully integrated into Prime Numbers Pong to track user behavior without requiring a server. All tracking uses the existing Google Analytics setup (G-FKKELVR3X2).

## Tracked Events

### 1. **Game Start**
- **Event:** `game_started`
- **Triggered:** When user clicks "CLICK TO START"
- **Data:** None
- **Purpose:** Track total game sessions

### 2. **UI - About Modal**
- **Event:** `ui_about_opened`
- **Triggered:** When user clicks "ABOUT" button
- **Data:** None
- **Purpose:** Track interest in game information

- **Event:** `ui_about_closed`
- **Triggered:** When user closes About modal (button or background click)
- **Data:** None
- **Purpose:** Track modal engagement

### 3. **Sound Toggle**
- **Event:** `sound_toggled`
- **Triggered:** When user clicks "SOUND ON/OFF" button
- **Data:** 
  - `state`: "on" or "off"
- **Purpose:** Track audio preference

### 4. **UFOPilot (Autopilot) Toggle**
- **Event:** `ufopilot_toggled`
- **Triggered:** When user clicks "UFOPILOT" button
- **Data:** 
  - `state`: "on" or "off"
  - `seconds_on`: Duration autopilot was active (only when turning off)
- **Purpose:** Track autopilot usage and engagement time

### 5. **Session High Score**
- **Event:** `session_highscore_updated`
- **Triggered:** When any player's score becomes new session high
- **Data:** 
  - `score`: The new high score value
- **Purpose:** Track player performance during current session
- **Note:** Updates multiple times per session as score increases

### 6. **Personal Best Score**
- **Event:** `personal_best_score`
- **Triggered:** When session score exceeds localStorage best
- **Data:** 
  - `score`: The new personal best
- **Purpose:** Track long-term player achievement
- **Storage:** Persisted in `localStorage` key `pong_personal_best_score`
- **Note:** Only fires once per new personal best

### 7. **Session Max Prime**
- **Event:** `session_max_prime_updated`
- **Triggered:** When a new prime is achieved that's higher than session max
- **Data:** 
  - `prime`: The prime number value
  - `prime_type`: "special" or "regular"
- **Purpose:** Track prime number achievements during session

### 8. **Personal Best Prime**
- **Event:** `personal_best_prime`
- **Triggered:** When session prime exceeds localStorage best
- **Data:** 
  - `prime`: The prime number value
  - `prime_type`: "special" or "regular"
- **Purpose:** Track long-term prime achievements
- **Storage:** Persisted in `localStorage` key `pong_personal_best_prime`
- **Note:** Only fires once per new personal best

---

## Implementation Details

### Core Tracking Function
```javascript
function track(eventName, params = {}) {
  // Safety: only track if GA loaded
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}
```

### Session Tracking Variables
```javascript
let sessionHighScore = 0;      // Highest score this session
let sessionMaxPrime = 0;       // Highest prime this session
let ufopilotStartTs = null;    // Timestamp when autopilot started
```

### LocalStorage Keys
- `pong_personal_best_score` - All-time highest score
- `pong_personal_best_prime` - All-time highest prime

---

## Google Analytics Dashboard

### Viewing Events in GA4

1. **Real-time Events:**
   - Go to Reports → Realtime
   - See events as they happen

2. **Event Analysis:**
   - Go to Reports → Engagement → Events
   - View all tracked events with counts

3. **Custom Reports:**
   Create custom explorations to analyze:
   - Average high scores per session
   - Autopilot usage rate
   - Sound preference distribution
   - Prime achievement patterns

### Useful GA4 Metrics

**Player Engagement:**
- `game_started` count = Total sessions
- `ufopilot_toggled` (state: on) / `game_started` = Autopilot adoption rate
- Average `seconds_on` for autopilot = Engagement duration

**Performance Tracking:**
- Distribution of `session_highscore_updated` values
- `personal_best_score` triggers = Returning player improvements
- Histogram of prime achievements

**UI Engagement:**
- `ui_about_opened` count = Information interest
- `sound_toggled` state distribution = Audio preferences

---

## Privacy Considerations

### What's Tracked
✅ Gameplay statistics (scores, primes)
✅ UI interactions (button clicks)
✅ Feature usage (autopilot, sound)
✅ Session performance

### What's NOT Tracked
❌ Personal information
❌ IP addresses (handled by GA4 anonymization)
❌ User identity
❌ Mouse movements
❌ Keyboard input

### LocalStorage Usage
- Only stores two numbers: best score and best prime
- User can clear via browser settings
- No personal data stored

---

## Testing Tracking

### Method 1: Browser Console
```javascript
// Open browser console (F12)
// Check if tracking function exists
typeof track === 'function'  // Should be true

// Manually trigger test event
track("test_event", { test_param: "test_value" })
```

### Method 2: GA4 Debug Mode
1. Install Google Analytics Debugger extension
2. Open game with extension active
3. Check console for event logs

### Method 3: Real-time Reports
1. Play game on https://rm-r3.github.io/primenumberspong/
2. Open Google Analytics → Real-time
3. Events should appear within 30 seconds

---

## Sample Analytics Queries

### Average Session Score
```
Metric: session_highscore_updated (average of score parameter)
```

### Autopilot Engagement
```
Metric: ufopilot_toggled (average of seconds_on parameter)
Filter: state = "off"
```

### Prime Achievement Rate
```
Dimension: prime_type
Metric: session_max_prime_updated (count)
```

### Feature Adoption
```
Dimension: event_name
Filter: ufopilot_toggled OR sound_toggled
Secondary dimension: state
```

---

## Future Enhancements

### Possible Additional Tracking
1. **Shot Statistics**
   - Total shots fired
   - Triple-shot usage count
   - Shot accuracy (hits vs misses)

2. **Gameplay Duration**
   - Session length
   - Time to first prime
   - Average rally duration

3. **Obstacle Interaction**
   - Obstacle spawn count
   - Ball-obstacle collision count

4. **Paddle Stats**
   - Strength level distribution
   - Freeze event frequency
   - Paddle hit counts

5. **Special Events**
   - Special prime types achieved
   - Highest combo chains
   - Close game counts

---

## Notes

- All tracking is **anonymous** and aggregated
- No server required - uses Google Analytics infrastructure
- Events fire immediately (no batching)
- LocalStorage only used for personal bests
- Safe for GDPR compliance (no personal data)

---

**Last Updated:** 2026-01-09  
**Game Version:** v003.1  
**Analytics ID:** G-FKKELVR3X2