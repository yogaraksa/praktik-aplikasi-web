---
name: Academic Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2251da'
  primary: '#0037b1'
  on-primary: '#ffffff'
  primary-container: '#1f4fd8'
  on-primary-container: '#ccd4ff'
  inverse-primary: '#b7c4ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#004f36'
  on-tertiary: '#ffffff'
  tertiary-container: '#006a49'
  on-tertiary-container: '#78ebb7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.005em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-sm: 0.75rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system is tailored for university students, course coordinators, and student cohort representatives (*Komti*). It conveys calm authority, efficiency, and academic clarity. The interface strips away distraction, turning chaotic university schedules, announcements, and task delegations into structured, easily scannable data.

The aesthetic blends **Modern Functional Minimalism** with **Swiss Typographic Rigor**:
- Pure white container cards elevated against a cool, pale slate canvas.
- Razor-sharp, low-contrast dividers and borders creating structural order without visual weight.
- Dense information architecture optimized for rapid task verification, timetable tracking, and group administrative actions.

## Colors

The palette establishes an ordered, paper-like digital surface with crisp ink contrast and targeted semantic markers.

- **Canvas & Surface Foundation:**
  - Base canvas background: `#F8FAFC` (Slate 50).
  - Secondary grouping/sub-panel background: `#F1F5F9` (Slate 100).
  - Primary cards & interactive surfaces: `#FFFFFF`.
- **Text & Hierarchy:**
  - Headings, crucial metrics, and primary text: `#0F172A` (Slate 900).
  - Body text and primary labels: `#334155` (Slate 700).
  - Secondary metadata, timestamps, and caption text: `#64748B` (Slate 500).
  - Disabled states, hints, and placeholder text: `#94A3B8` (Slate 400).
- **Structural Outlines:**
  - Default borders, table separators, and hairline dividers: `#E2E8F0` (Slate 200).
  - Emphasized borders and hover borders: `#CBD5E1` (Slate 300).
- **Accents & Semantics:**
  - **Academic Cobalt (Primary):** `#1F4FD8` for interactive elements, focus states, badge active tags, and key calls-to-action.
  - **Success / Attendance (Tertiary):** `#059669` (Emerald 600) with `#ECFDF5` background for verified tasks, signed attendance, and confirmed submissions.
  - **Warning / Urgent Deadlines:** `#D97706` (Amber 600) with `#FFFBEB` background for approaching assignment cutoffs and pending coordinator reviews.

## Typography

Typography relies on a single workhorse grotesque sans-serif (`Inter`) configured for maximum information density and tabular precision.

- Headings use optical tracking tightening (`letterSpacing: -0.01em` to `-0.025em`) to maintain sharp discipline on screen.
- Tabular numerals (`font-feature-settings: "tnum"`) must be activated for all timestamps, course codes, grade indicators, and numeric rosters.
- Uppercase text is strictly limited to `label-sm` for system status tokens (e.g., `DUE TODAY`, `COMPLETED`, `KOMTI ASSIGNED`).

## Layout & Spacing

The layout is built upon an 8pt base grid with a 12-column responsive layout engine on desktop, scaling to 4 columns on mobile.

- **Desktop (1024px+):** Max-width content frame of `1280px` centered with `margin: 2rem` and column gutters of `1.25rem`. Complex academic dashboards use asymmetric splits (e.g., 8-column main activity list + 4-column schedule/sidebar).
- **Tablet (640px - 1023px):** Collapsible persistent navigation with `1.5rem` margins and `1rem` column gutters.
- **Mobile (<640px):** Edge-to-edge layout with `margin-sm: 1rem` and compact vertical stack layouts using `space-md` gaps.
- Spacing rhythm favors compact, scannable arrangements. List rows, calendar matrices, and task checklists prioritize tight horizontal alignment over excessive empty air.

## Elevation & Depth

Visual hierarchy is maintained primarily through **low-contrast outlines** and subtle contrast shifts rather than heavy drop shadows:

- **Base Cards & Surfaces:** Pure `#FFFFFF` resting against the `#F8FAFC` canvas, bounded by a 1px solid `#E2E8F0` border.
- **Interactive Hover & Rest Elevation:**
  - *Resting card:* Border `1px solid #E2E8F0`, shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.04)`.
  - *Card hover:* Border shifts to `#CBD5E1`, shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Modals & Flyouts:** Floating elements use a clean structural border `#E2E8F0` coupled with a deep, neutral diffused shadow (`0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`).
- **Secondary Tiers:** Inset modules inside cards (e.g., deadline countdowns, note callouts) use a `#F1F5F9` solid fill with no borders.

## Shapes

The interface embraces a disciplined geometry balancing approachable soft geometry with architectural precision:

- **Standard Cards, Panels, & Dialogs:** `rounded-lg` (12px / 0.75rem to 1rem) for containment containers.
- **Interactive Controls (Inputs, Buttons, Dropdowns):** `rounded` (8px / 0.5rem) providing clean tactile definition.
- **Status Tags, Counter Badges, & Avatars:** Rounded pills (full circle / 9999px) to visually set metadata apart from structural content cards.

## Components

### Buttons
- **Primary:** Solid `#1F4FD8` fill, white `#FFFFFF` text, `font-weight: 500`. Hover state `#1A43B8`. Active state `#153798`. Subtle `0 1px 2px rgba(31, 79, 216, 0.2)` shadow.
- **Secondary:** Surface `#FFFFFF`, border `1px solid #E2E8F0`, text `#0F172A`. Hover: background `#F8FAFC`, border `#CBD5E1`.
- **Ghost / Tertiary:** Transparent background, text `#475569`. Hover: background `#F1F5F9`, text `#0F172A`.
- **Sizes:** Compact height `36px` (`padding: 0 12px`) for dense tooling; standard height `40px` (`padding: 0 16px`).

### Cards & Grouping
- Pure `#FFFFFF` surface with `1px solid #E2E8F0` border and `12px` border-radius.
- Internal headers include a subtle bottom separator line (`1px solid #F1F5F9`) with `space-md` internal padding.

### Chips & Badges
- Pill-shaped status indicators with muted backgrounds:
  - *Class Tag / General:* `#F1F5F9` background with `#475569` text.
  - *Verified / Attendance:* `#ECFDF5` background with `#059669` text.
  - *Pending / Deadline:* `#FFFBEB` background with `#D97706` text.
  - *Komti / Coordinator Action:* `#EFF6FF` background with `#1F4FD8` text.

### Inputs & Form Fields
- Height `40px`, border `1px solid #E2E8F0`, background `#FFFFFF`, text `#0F172A`, placeholder `#94A3B8`.
- Focus ring: `2px solid #1F4FD8` with `1px` white offset (`box-shadow: 0 0 0 2px rgba(31, 79, 216, 0.15)`).

### Selection Controls (Checkboxes & Radios)
- Square (checkbox: `rounded: 4px`) and circular (radio), size `18px`.
- Unchecked: `1.5px solid #CBD5E1` on white surface.
- Checked: `#1F4FD8` background with crisp white icon checkmark.

### Academic-Specific Modules
- **Lecture Schedule Cell:** Left border stroke (`3px solid #1F4FD8`) on a white card to indicate current or upcoming class session with tabular room numbers and times.
- **Roster & Attendance List Item:** Row height `48px`, border-bottom `1px solid #F1F5F9`, hover background `#F8FAFC`, presenting student IDs in tabular `JetBrains Mono` or tabular `Inter` alongside student names.