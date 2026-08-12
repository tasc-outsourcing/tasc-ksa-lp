# TASC — Saudi Arabia Landing Page

**Same six-section structure as the UAE page. Content from the KSA brochure.**
Companion document to `TASC_Landing_Page.md` (UAE).
Likely a new route in the same `tcs-lp` project — e.g. `/ksa-tax-accounting`.

Excluded: Google reviews, form fields.
Same layout patterns, same section order, same component library. Only the content is Saudi.

---

## What changed from the UAE version

| | UAE page | KSA page |
|---|---|---|
| Regulator | FTA | **ZATCA** |
| VAT | 5% implied | **15%** |
| E-invoicing | Optional add-on | **FATOORAH Phase 2, mandatory** |
| Extra tax head | — | **Zakat** |
| Standards body | IFRS | **SOCPA** (and IFRS) |
| Threshold | AED 375,000 | **SAR 375,000** |
| Hero pricing | AED 19,000 bundle saving (derived) | **From SAR 4,999/month (stated)** |
| Entity | TASC Corporate Services | **TASC Corporate Services** — confirm, see below |
| Tenure claim | 19+ years in the UAE | **19+ years in the GCC** — see below |

---

## Resolved

| # | Item | Resolution |
|---|---|---|
| 1 | Entity | **TASC Corporate Services** throughout, same as the UAE page. |
| 2 | Offices | **Three**: Riyadh (King Abdulaziz Dist.), Riyadh KAFD, Al Khobar. Full details below. |
| 3 | Tenure claim | **19+ years in the GCC.** Not "in Saudi Arabia." |
| 5 | Contact numbers | Office numbers, per §Contact below. |

### Contact — confirmed

**Riyadh — main office**
Top Talent Consulting Ltd., Building 1, Office No. 4, 1st Floor
Salahuddin Al Ayoubi Street, King Abdulaziz Dist.
Riyadh, Saudi Arabia · P.O. Box 11452
**+966 55 397 0703** → `tel:+966553970703`

**Riyadh — KAFD**
Level 7, Building 407, Zone 4
King Abdullah Financial District, Riyadh 13511, Saudi Arabia

**Al Khobar**
Al Rashid Towers, Dhahran Road, 2nd Floor
Al Khobar, Saudi Arabia · P.O. Box 34448
**+966 11 216 6218** → `tel:+966112166218`

**General:** info@tascoutsourcing.com
**Employee verification:** request@tascoutsourcing.com — footer only, do not put this in any CTA

**Primary number for the page: +966 55 397 0703.** It's a mobile, so it can carry WhatsApp Business — which solves the WhatsApp problem the UAE page still has open. Al Khobar's landline goes in the footer only.

> ⚠️ **Check the Al Khobar number.** `011` is the Riyadh area code; Eastern Province (Dammam, Dhahran, Al Khobar) is `013`. Either +966 11 216 6218 should read +966 13, or it's a Riyadh line that Al Khobar enquiries route to. Confirm before it goes on a live page.

> **Legal entity note.** The Riyadh address begins "Top Talent Consulting Ltd." — the registered KSA entity. The brand on the page is TASC Corporate Services. Decide whether the footer shows the registered entity name alongside the brand. For a compliance service I'd show it: a verifiable legal entity is a trust signal, and it costs nothing.

**Three offices is a genuine advantage.** The UAE page has one address. The benchmark competitor lists two. Physical presence across the Kingdom also speaks to local-content expectations that matter in Saudi procurement. This is surfaced in Section 3.

---

## SOCPA and ZATCA credentials — resolved: no claim

Submission routes through a third party, and the vendor relationship is not disclosed. **Therefore the page makes no credential claim of any kind.** The optional line has been removed. Nothing below needs changing.

**Used throughout, and safe:**
- ZATCA-compliant records · maintained to SOCPA standards · SOCPA compliance tracking
- aligned to SOCPA and IFRS
- returns prepared · submission managed · filing support

**Never appears, and must not be added at any review stage:**
ZATCA-accredited · ZATCA-approved · ZATCA-licensed · ZATCA-registered · SOCPA-licensed · SOCPA-certified · SOCPA member · licensed tax agent · tax representative · any ZATCA or SOCPA logo, badge or seal

**Verb discipline.** Where the third party submits:
- ✅ "returns prepared and submitted" · "we manage your ZATCA submission" · "filing support"
- ❌ "we act as your tax representative" · "our licensed accountants" · "we are ZATCA-registered"

"SOCPA compliance tracking" stays — it describes a service performed, not a licence held.

### What carries credibility instead

Without a licence claim, four things do the work on this page. All are verifiable:

| | |
|---|---|
| **Three offices in the Kingdom** | Riyadh ×2 and Al Khobar. Physical presence beats a badge for a Saudi buyer, and the benchmark competitor only manages two locations in the UAE. |
| **Registered legal entity** | Top Talent Consulting Ltd., shown in the footer. Verifiable on the commercial register. |
| **19+ years in the GCC** | No competitor on the benchmark page makes a tenure claim at all. |
| **675+ clients · 25+ awards** | Group figures, consistent with the UAE page. |

> **One thing for sales, not the page.** A finance buyer will eventually ask "are you SOCPA licensed?" on a call. That answer needs preparing before the campaign goes live, because the page deliberately doesn't address it and the question will arrive.

---

## Structure

| # | Section | Layout |
|---|---|---|
| — | Utility bar | Address · Phone · WhatsApp, sticky |
| 1 | Hero | Content left, form card right |
| 2 | Services | H2 + 2 paragraphs, 3 clusters |
| 3 | Why Choose TASC | 5-item checklist left, image right |
| 4 | CTA band | Dark image band, contact cards |
| 5 | Six-block | H2 + intro + 3-column grid |
| 6 | Footer | Address, hours, socials, legal |
| — | Floating | WhatsApp bottom-left |

---

## Utility bar

```
📍 King Abdullah Financial District, Riyadh   |   📞 +966 55 397 0703   |   💬 WhatsApp
```

- Address link text: `King Abdullah Financial District, Riyadh` → Google Maps for *Level 7, Building 407, Zone 4, King Abdullah Financial District, Riyadh 13511*
- Phone: `+966 55 397 0703` → `tel:+966553970703`
- WhatsApp: same number, which is a mobile and can be WhatsApp Business verified

WhatsApp link:
`https://api.whatsapp.com/send?phone=966553970703&text=Hi,%20I%27m%20enquiring%20about%20accounting%20and%20tax%20services%20in%20Saudi%20Arabia`

**Why KAFD in the bar rather than the King Abdulaziz Dist. office:** KAFD is the recognisable address and reads as the credible one to a Saudi finance buyer. All three offices appear in the footer. Mobile: truncate to `Riyadh, KSA` or drop the address entirely.

> Unlike the UAE page, the KSA WhatsApp CTA is **not blocked** — +966 55 397 0703 is a mobile. Build it live.

---

## 1. Hero

**Left column**

Eyebrow pill
> Tax & Accounting · Saudi Arabia

**H1** — accent underline on the SAR figure, matching the UAE page's treatment
> Your full Saudi finance function from <u>SAR 4,999</u> a month

**Sub-headline**
> Bookkeeping, accounting, VAT, Zakat, withholding tax, FATOORAH e-invoicing and your accounting software — bundled into one monthly fee, delivered by specialists who work inside the Saudi regulatory landscape every day.

**CTA pair**
> **[ Book free consultation › ]**   **[ View service fees › ]**

**Three stats**
```
675+                    19+                     25+
Clients served          Years in the GCC        Industry awards
```

**Right column — form card** *(fields ignored per instruction)*
- Heading: **Book your free consultation**
- Sub: Share your details and our team will be in touch within one working day.
- Button: **Book Free Consultation**

### Why this H1 works better than the UAE one

The UAE page has to construct its number — AED 7,500 looks expensive in isolation, so it's framed as a AED 19,000 saving against AED 109,000 unbundled. KSA needs none of that. **SAR 4,999 is already a competitive "from" price, and it covers seven services including the software.** State it and move on.

That also makes this hero structurally closer to the competitor's own packages headline ("from AED 411/mo") than the UAE page manages to be.

**Alternative H1, if you want something more distinctive:**
> <u>Seven compliance services.</u> One monthly fee from SAR 4,999.
> *Sub: Bookkeeping, accounting, VAT, Zakat, WHT, FATOORAH e-invoicing and accounting software — one contract, one invoice, one team.*

Punchier and the count does real work. Slightly less scannable. Either is defensible; I'd ship the first and A/B the second.

**Keep the word "from."** The brochure footnote states final pricing depends on transaction volume and scope. Dropping "from" turns a starting price into a fixed quote.

---

## 2. Services

**H2**
> Accounting, Zakat, tax and e-invoicing — all under one roof

**Paragraph 1**
> ZATCA registration, VAT and Zakat returns, withholding tax on cross-border payments, FATOORAH Phase 2 integration and the books underneath all of it. We cover the full compliance cycle so nothing sits half-finished between vendors.

**Paragraph 2**
> ZATCA enforcement is now data-driven and real-time, and penalties begin from the first missed deadline. We work with SMEs and MSMEs across the Kingdom, startups scaling their finance function, foreign companies entering Saudi Arabia, and businesses with no in-house finance team.

---

### Zakat & Tax `Services`

**ZATCA Registration**
We handle your registration for VAT and Zakat with ZATCA and track every deadline that follows it.

**Zakat & Income Tax Returns**
We calculate your Zakat base and taxable income, prepare the returns and manage submission to ZATCA — accurately, and ahead of the due date.

**Withholding Tax on Cross-Border Payments**
We identify which of your outbound payments attract WHT, at what rate, and handle the filings — the exposure most companies discover only during an audit.

---

### Accounting `Services`

**Bookkeeping**
We record your day-to-day transactions, categorise expenses, generate invoices and maintain the general ledger, so your books are current rather than reconstructed at year-end.

**Financial Reporting & MIS**
Monthly management information alongside your statutory reporting — profit and loss, balance sheet, cash flow and the operational numbers your decisions actually depend on.

**Audit-Ready Documentation**
We maintain your records to SOCPA standards with SOCPA compliance tracking throughout the year, so a ZATCA audit or a statutory audit finds documentation rather than gaps.

**Accounting Setup & Software**
We implement your cloud accounting system end to end, including chart of accounts and the software subscription itself — included in the bundled service.

---

### VAT & E-Invoicing `Services`

**VAT Registration**
We complete your VAT registration with ZATCA from start to finish, at 15% and against the SAR 375,000 threshold.

**VAT Return Filing**
We prepare and submit your monthly or quarterly returns, with input and output VAT reconciled before every submission — and reconciled alongside Zakat, not in isolation from it.

**FATOORAH Phase 2 Integration**
E-invoicing is mandatory and integration failures carry penalties up to SAR 50,000. We handle the setup, the integration and the ongoing compliance.

---

## 3. Why Choose TASC Corporate Services?

**H2**
> Why Choose TASC Corporate Services?

**Intro**
> TASC has operated across the GCC for over 19 years. We handle compliance for companies that would rather not build a finance department — and because we also handle their payroll, hiring and government relations, nothing falls between providers.

**Five check items**

**✓ Trusted by 675+ Clients**
From startups scaling their first finance function to established groups across e-commerce, professional services, contracting, trading, hospitality and healthcare.

**✓ 19+ Years in the GCC**
We have worked through VAT introduction, e-invoicing mandates and successive ZATCA enforcement shifts. Your account is handled by people who have seen the rules change.

**✓ Three Offices Across the Kingdom**
Riyadh in King Abdulaziz District, Riyadh in KAFD, and Al Khobar. Saudi compliance is handled from the Kingdom by people on the ground, not from a UAE desk with the service adapted at the border. ZATCA, Zakat, FATOORAH and SOCPA are a dedicated function for us.

**✓ Two Ways to Engage**
A bundled monthly service from SAR 4,999 covering everything, or per-filing tax services from SAR 1,500 if you only need returns handled. You pick the model that fits your stage.

**✓ One Partner Across Your Whole Setup**
Your tax position stays connected to your payroll, your hiring and your government relations. One relationship, one invoice, no handovers between vendors.

**Image right** — badge overlay:
```
19+ Years
Across the GCC
```

---

## 4. CTA band

Full-width dark image band.

**H2**
> Don't Wait for the Penalty Notice

**Paragraph**
> Late VAT registration costs **SAR 10,000**. Late or missed returns run **5–25%** of the tax due, with **5% a month** on late payment. E-invoicing violations reach **SAR 50,000**. A nil return is still a mandatory return. Book a free compliance health check and find out where you stand.

**Three cards**

| | |
|---|---|
| 📞 **Call us** | +966 55 397 0703 → `tel:+966553970703` |
| 💬 **WhatsApp us** | +966 55 397 0703 |
| 📅 **Book Free Consultation** | Online Meeting → opens the form dialog |

> No ZATCA notification mock-up, logo, badge or seal in this section or anywhere else on the page.
>
> ⚠️ Re-verify all four penalty figures against current ZATCA guidance before launch. The 5–25% band and the SAR 50,000 e-invoicing ceiling in particular — penalty schedules there have been revised more than once.

---

## 5. Why work with TASC Corporate Services's accounting team?

**H2**
> Why work with TASC Corporate Services's accounting team?

**Intro**
> Saudi compliance takes more than a bookkeeper. It takes a provider who understands how ZATCA, Zakat, VAT and e-invoicing connect — and how all four connect to the rest of your business. Here is what you get with our team:

**Six items, 3-column grid**

**✓ Accurate, Timely Bookkeeping**
Your records are maintained through the year, not assembled at year-end. Clean books mean filing is routine and your documentation holds up when ZATCA asks for it.

**✓ On-Time Registration & Filing**
We track every deadline that applies to your entity — VAT, Zakat, WHT — and prepare each submission well ahead of it. Nearly every penalty in the Saudi schedule is a deadline penalty.

**✓ FATOORAH Handled Properly**
Phase 2 integration is mandatory and the penalties reach SAR 50,000. We handle integration, validation and ongoing compliance rather than treating e-invoicing as a one-off IT project.

**✓ SOCPA and IFRS Aligned**
Records prepared to SOCPA standards and International Financial Reporting Standards. That matters when you raise finance, onboard investors, or go through statutory audit.

**✓ VAT Reconciled Alongside Zakat**
Most providers handle these separately. Treated in isolation, they produce inconsistencies that surface during audit. We reconcile them together.

**✓ One Partner, One Invoice**
Accounting sits alongside your payroll, hiring and government relations. Nothing falls between vendors, because there is only one vendor.

---

## 6. Footer

Three offices, three columns on desktop, stacked on mobile.

```
TASC Corporate Services
[registered as Top Talent Consulting Ltd. — see legal entity note above]


RIYADH — HEAD OFFICE          RIYADH — KAFD                 AL KHOBAR

Top Talent Consulting Ltd.    Level 7, Building 407          Al Rashid Towers
Building 1, Office No. 4      Zone 4                         Dhahran Road, 2nd Floor
1st Floor                     King Abdullah Financial        Al Khobar
Salahuddin Al Ayoubi Street   District                       Saudi Arabia
King Abdulaziz Dist.          Riyadh 13511                   P.O. Box 34448
Riyadh, Saudi Arabia          Saudi Arabia
P.O. Box 11452
                              [Directions]
+966 55 397 0703              
[Directions]                                                 [Directions]


info@tascoutsourcing.com          WhatsApp: +966 55 397 0703

Employee verification: request@tascoutsourcing.com

Sunday – Thursday, 8:00 AM – 5:30 PM

[LinkedIn]  [Instagram]  [Facebook]  [YouTube]  [X]

Terms and Conditions  ·  Privacy Policy
© 2026 TASC Corporate Services
```

**Notes**
- Each address gets its own Google Maps directions link.
- `request@tascoutsourcing.com` is footer-only. Do not put it in any CTA or contact card — it is an HR verification channel, not a sales route, and mixing them will send leads to the wrong inbox.
- **Al Khobar carries an address only, no phone.** All calls route to +966 55 397 0703. One number across the page keeps call attribution clean anyway.
- Hours are **Sunday to Thursday, 8:00 AM – 5:30 PM**. Do not let the UAE footer's Monday–Friday carry across.
- LocalBusiness JSON-LD: `openingHours` as `Su,Mo,Tu,We,Th 08:00-17:30`, `telephone` as `+966553970703`, and three `PostalAddress` entries — one per office. `addressCountry: SA`.

---

## Floating elements

- WhatsApp button, bottom-left, persistent
- No chat widget (same as UAE — dropped from scope)

---

## Where the pricing sits

Unlike the UAE page, KSA carries its price in the H1 directly. Beyond that:

1. **Hero H1 and sub** — "from SAR 4,999 a month," with the seven inclusions listed
2. **Secondary hero CTA** — "View service fees"
3. **Section 3, item 4** — both engagement models, SAR 4,999 bundled and SAR 1,500 per filing

The full rate card belongs on a separate fees page behind that CTA:

| Service offering | Occurrence | Fee |
|---|---|---|
| **Bundled financial services** — bookkeeping, accounting, VAT, Zakat, WHT, e-invoicing & accounting software | Monthly | **From SAR 4,999** |
| **Per-filing tax services** — VAT / WHT / Zakat return preparation, review & ZATCA submission | Per filing | **From SAR 1,500** |
| **Add-on modules** — e-invoicing setup & software, financial reporting, payroll, corporate tax | As required | **On request** |

Footnote, verbatim from the brochure: *Final pricing depends on transaction volume and scope of work. Contact us for a tailored quote.*

---

## One internal inconsistency to be aware of

The two rate cards don't line up, and a prospect operating in both markets will notice:

| | KSA bundle | UAE bundle |
|---|---|---|
| Monthly fee | SAR 4,999 (≈ AED 4,890) | AED 7,500 |
| Accounting software included | ✅ | ❌ (AED 4,700 setup + AED 5,400/yr) |
| Transaction volume | Not stated | Up to 300/month |

**KSA is priced roughly 35% below UAE for a broader scope.** That may be a deliberate market-entry position — Saudi is more competitive on price and TASC KSA is the younger operation. But if it isn't deliberate, one of the two cards needs revisiting, and if it is, sales should have an answer ready for the client who asks.

Also note KSA states no transaction band while UAE states 300/month. Whichever way you go, be consistent — the transaction band is the thing that makes the UAE price defensible, and its absence in KSA means "from SAR 4,999" has no ceiling attached to it.

---

## Codex handover

The prompts in `Codex_Prompts_TASC_LP.md` transfer with three changes:

1. New route rather than a restructure — likely `/ksa-tax-accounting`, so Phase 0's audit is lighter, but confirm whether a separate HubSpot form exists for KSA leads or the UAE forms are being reused. If reused, KSA leads will land in UAE reporting.
2. Substitute the compliance grep terms: add `zatca`, `socpa`, `fatoorah`, `zakat` alongside the FTA phrases, checking for accreditation-style claims.
3. Three clusters here, same as UAE, not the brochure's four pillars — bookkeeping folds into Accounting Services exactly as it does on the UAE page and the competitor's.
