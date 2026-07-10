// ============================================================
// FUSION LEATHER — SALES TRACKING DATA
// ============================================================
// WEEKLY UPDATE: change only the three lines in the box below,
// then commit. The dashboard updates automatically.
// ============================================================

const TRACKING = {

  // ┌─────────────── WEEKLY UPDATE — EDIT THESE ───────────────┐
  asOf: "4 July 2026",          // date the MTD figures run to
  mtdRand: 11000000,                   // month-to-date sales, Rand
  mtdD2m: 3500000,                    // month-to-date volume, DM2
  // └───────────────────────────────────────────────────────────┘

  // Index of the current (open) month: 0=March ... 11=February
  currentMonth: 4,              // 4 = July 2026

  // When a month closes: append its final figure to cyRand / cyD2m
  // below, increase currentMonth by 1, and reset the three
  // weekly lines above for the new month.

  months: ["March","April","May","June","July","August","September","October","November","December","January","February"],
  monthYears: ["2026","2026","2026","2026","2026","2026","2026","2026","2026","2026","2027","2027"],

  // Closed-month actuals (financial year to date)
  cyRand: [24096876.57, 22903150.71, 21244839.21, 22638116.46],
  cyD2m:  [7627058, 7082342, 6449587, 6876033],

  // Prior year — full 12 months
  pyRand: [19378391.18,20734689.80,23930013.95,20562761.73,25984228.12,23034004.41,25286894.04,24441523.83,24019671.48,8655569.77,16558856.79,25001543.04],
  pyD2m:  [6086493,6606128,7619646,6426829,8303695,7495078,8123609,7834610,7400412,2660061,5385585,7912376],

  // Budget — full 12 months
  budRand: [22676540.99,24318132.16,28031283.50,24408157.95,30690513.40,27201200.83,29956776.10,28676944.38,28733791.49,10163318.82,19473868.65,29748971.72],
  budD2m:  [6872272.84,7353265.00,8486441.59,7292293.13,9214939.65,8168684.46,8967639.96,8667841.35,8518237.37,3069575.62,5872364.78,8866444.26],

  // Full-year totals
  pyTotalRand: 257588148.14, budTotalRand: 304079500.00,
  pyTotalD2m: 81854522, budTotalD2m: 91350000,
};
