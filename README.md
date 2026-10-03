# Dale Dalida — SOC Analyst Portfolio Site

Source code for my personal portfolio website, built to show recruiters and hiring managers my readiness for SOC Analyst L1 / Junior SOC roles.

## What's on the site

- Analyst profile, hiring signals (B.A.T. Cybersecurity, U.S. Navy HM2, former Secret clearance, Security+ in progress)
- Case files: [Azure SOC & Honeynet](https://github.com/DaleDalida1/Azure-SOC), [Phishing Awareness Training](https://github.com/DaleDalida1/Cybersecurity-AwarenessTraining-phishing-), and academic IR / threat-hunting / ML projects
- TryHackMe training log with stats, badges, and completed rooms ([profile](https://tryhackme.com/p/MiniBambino))
- Toolkit, military and work background, and resume download

## Structure

```
index.html                         Page content
style.css                          Styles (dark SOC-console theme)
main.js                            Clock + scroll reveal (no inline scripts)
assets/fonts/                      Self-hosted JetBrains Mono + General Sans
assets/Dale_Dalida_SOC_Analyst_Resume.pdf
assets/thm/                        TryHackMe badge images
```

Plain static HTML/CSS with a small amount of vanilla JavaScript. No build step: open `index.html` in a browser or deploy the folder to any static host.

TryHackMe stats are a snapshot from October 3, 2026.

## Security

- Strict Content Security Policy: only files from this site can load (no third-party scripts, styles, or fonts).
- Fonts are self-hosted; no outside requests on page load.
- The public resume has phone number and email removed.
