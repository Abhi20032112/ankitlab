# TODO List for Website Fixes

## Task 1: Open "managed by" link in new tab and make social media links functional
- [x] Edit Footer.jsx: Add `target="_blank"` to the "managed by" link (href="https://ards.in").
- [x] Edit Footer.jsx: Change social media buttons (Twitter, LinkedIn, Facebook) from `<motion.button>` to `<a>` tags with `target="_blank"` and placeholder hrefs (e.g., "#").

## Task 2: Prevent navbar color change on scroll
- [x] Edit Navbar.jsx: Remove conditional background opacity, shadow, and border changes when scrolled (keep consistent bg-white/80 backdrop-blur-lg).

## Task 3: Auto-scroll to top on new page
- [x] Edit App.jsx: Add useEffect to scroll to top when location changes.

## Followup Steps
- [x] Test the changes by running the development server and navigating pages.
- [ ] Verify links open in new tabs.
- [ ] Confirm navbar doesn't change on scroll.
- [ ] Ensure pages start from top on navigation.
