import { NewsApiResponse } from "./dto";
import transformer from "./transformer";

const mockData: NewsApiResponse = {
  articles: {
    results: [
      {
        uri: "8565596886",
        lang: "eng",
        isDuplicate: false,
        date: "2025-02-26",
        time: "10:03:25",
        dateTime: "2025-02-26T10:03:25Z",
        dateTimePub: "2025-02-26T10:02:16Z",
        dataType: "news",
        sim: 0,
        url: "https://www.siliconindia.com/news/general/musks-india-move-reveals-cracks-in-trumps-coalition-nid-234633-cid-1.html",
        title: "Musk's India Move Reveals Cracks in Trump's Coalition",
        body: "Elon Musk's foray into the Indian market is laying bare fault lines within erstwhile US President Donald Trump's alliance, underscoring the escalating struggle between Big Tech's world ambition and America First agenda. While Musk was in Washington recently, it was unclear if he visited Indian Prime Minister Narendra Modi as a corporate mogul or an unofficial US representative. Even Trump was in the dark when queried on Musk's two hats. But shortly after the visit, Bloomberg revealed that Tesla Inc. was recruiting staff in India and set to export thousands of cars to the nation, indicating that Musk may have finally obtained the access he has been seeking for a long time.",
        source: {
          uri: "siliconindia.com",
          dataType: "news",
          title: "Silicon India",
        },
        authors: [],
        concepts: [
          {
            uri: "http://en.wikipedia.org/wiki/Elon_Musk",
            type: "person",
            score: 4,
            label: {
              eng: "Elon Musk",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Donald_Trump",
            type: "person",
            score: 3,
            label: {
              eng: "Donald Trump",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/India",
            type: "loc",
            score: 3,
            label: {
              eng: "India",
            },
            location: {
              type: "country",
              label: {
                eng: "India",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Narendra_Modi",
            type: "person",
            score: 2,
            label: {
              eng: "Narendra Modi",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Washington_(state)",
            type: "loc",
            score: 2,
            label: {
              eng: "Washington (state)",
            },
            location: {
              type: "place",
              label: {
                eng: "Washington (state)",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Tesla,_Inc.",
            type: "org",
            score: 1,
            label: {
              eng: "Tesla, Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Bloomberg_L.P.",
            type: "org",
            score: 1,
            label: {
              eng: "Bloomberg L.P.",
            },
          },
        ],
        categories: [
          {
            uri: "dmoz/Society/Religion_and_Spirituality/Sikhism",
            label: "dmoz/Society/Religion and Spirituality/Sikhism",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Financial_Services/Automobile_Buying_and_Financing",
            label:
              "dmoz/Business/Financial Services/Automobile Buying and Financing",
            wgt: 100,
          },
          {
            uri: "news/Politics",
            label: "news/Politics",
            wgt: 57,
          },
        ],
        image: "efd2c0MC.jpg",
        eventUri: null,
        location: null,
        shares: {},
        sentiment: -0.2156862745098039,
        wgt: 478260205,
        relevance: 1,
      },
      {
        uri: "8565563558",
        lang: "eng",
        isDuplicate: false,
        date: "2025-02-26",
        time: "09:53:17",
        dateTime: "2025-02-26T09:53:17Z",
        dateTimePub: "2025-02-26T09:40:20Z",
        dataType: "news",
        sim: 0,
        url: "https://www.marketbeat.com/instant-alerts/forvis-mazars-wealth-advisors-llc-boosts-position-in-tesla-inc-nasdaqtsla-2025-02-26/",
        title:
          "Forvis Mazars Wealth Advisors LLC Boosts Position in Tesla, Inc. (NASDAQ:TSLA)",
        body: "Forvis Mazars Wealth Advisors LLC raised its stake in shares of Tesla, Inc. (NASDAQ:TSLA - Free Report) by 28.2% in the fourth quarter, according to its most recent filing with the Securities & Exchange Commission. The institutional investor owned 8,308 shares of the electric vehicle producer's stock after buying an additional 1,828 shares during the quarter. Forvis Mazars Wealth Advisors LLC's holdings in Tesla were worth $3,355,000 at the end of the most recent reporting period.\n\nA number of other hedge funds have also added to or reduced their stakes in TSLA. World Investment Advisors LLC boosted its position in shares of Tesla by 1,248.9% during the 3rd quarter. World Investment Advisors LLC now owns 199,229 shares of the electric vehicle producer's stock valued at $52,124,000 after acquiring an additional 184,459 shares during the last quarter. Destination Wealth Management boosted its position in shares of Tesla by 12.1% during the 3rd quarter. Destination Wealth Management now owns 12,597 shares of the electric vehicle producer's stock valued at $3,296,000 after acquiring an additional 1,359 shares during the last quarter. Stephens Consulting LLC boosted its position in shares of Tesla by 126.7% during the 4th quarter. Stephens Consulting LLC now owns 1,594 shares of the electric vehicle producer's stock valued at $644,000 after acquiring an additional 891 shares during the last quarter. Vinva Investment Management Ltd boosted its position in shares of Tesla by 59.2% during the 3rd quarter. Vinva Investment Management Ltd now owns 117,457 shares of the electric vehicle producer's stock valued at $30,593,000 after acquiring an additional 43,685 shares during the last quarter. Finally, MML Investors Services LLC boosted its position in shares of Tesla by 3.3% during the 3rd quarter. MML Investors Services LLC now owns 309,382 shares of the electric vehicle producer's stock valued at $80,944,000 after acquiring an additional 9,919 shares during the last quarter. Hedge funds and other institutional investors own 66.20% of the company's stock.\n\nTSLA opened at $302.80 on Wednesday. The company has a debt-to-equity ratio of 0.08, a quick ratio of 1.61 and a current ratio of 2.02. Tesla, Inc. has a 52-week low of $138.80 and a 52-week high of $488.54. The stock has a market capitalization of $973.96 billion, a PE ratio of 148.43, a price-to-earnings-growth ratio of 5.86 and a beta of 2.34. The stock's 50 day moving average price is $393.98 and its 200-day moving average price is $315.69.\n\nTesla (NASDAQ:TSLA - Get Free Report) last issued its quarterly earnings results on Wednesday, January 29th. The electric vehicle producer reported $0.66 earnings per share for the quarter, missing the consensus estimate of $0.74 by ($0.08). Tesla had a return on equity of 10.31% and a net margin of 7.26%. On average, equities research analysts predict that Tesla, Inc. will post 2.56 EPS for the current year.\n\nIn other Tesla news, CFO Vaibhav Taneja sold 7,000 shares of the business's stock in a transaction on Monday, December 2nd. The stock was sold at an average price of $354.43, for a total value of $2,481,010.00. Following the sale, the chief financial officer now directly owns 105,032 shares of the company's stock, valued at approximately $37,226,491.76. The trade was a 6.25 % decrease in their ownership of the stock. The transaction was disclosed in a legal filing with the SEC, which can be accessed through this link. Also, Director Kathleen Wilson-Thompson sold 100,000 shares of the business's stock in a transaction on Wednesday, December 4th. The stock was sold at an average price of $352.54, for a total value of $35,254,000.00. Following the completion of the sale, the director now directly owns 5,400 shares in the company, valued at $1,903,716. This trade represents a 94.88 % decrease in their ownership of the stock. The disclosure for this sale can be found here. Insiders have sold a total of 523,386 shares of company stock valued at $195,995,200 over the last ninety days. Company insiders own 20.70% of the company's stock.\n\nA number of analysts have recently issued reports on the company. Piper Sandler lifted their price target on Tesla from $315.00 to $500.00 and gave the company an \"overweight\" rating in a research report on Tuesday, January 21st. Bank of America downgraded Tesla from a \"buy\" rating to a \"neutral\" rating and lifted their price target for the company from $400.00 to $490.00 in a research report on Tuesday, January 7th. Truist Financial boosted their target price on Tesla from $351.00 to $373.00 and gave the stock a \"hold\" rating in a research report on Thursday, January 30th. Morgan Stanley restated an \"overweight\" rating on shares of Tesla in a research report on Tuesday, February 18th. Finally, Jefferies Financial Group boosted their target price on Tesla from $195.00 to $300.00 and gave the stock a \"hold\" rating in a research report on Thursday, November 14th. Ten analysts have rated the stock with a sell rating, eleven have assigned a hold rating, sixteen have assigned a buy rating and one has assigned a strong buy rating to the company. According to MarketBeat, the company has an average rating of \"Hold\" and an average target price of $319.57.\n\nCheck Out Our Latest Stock Analysis on TSLA\n\nTesla, Inc designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. The company operates in two segments, Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells automotive regulatory credits; and non-warranty after-sales vehicle, used vehicles, body shop and parts, supercharging, retail merchandise, and vehicle insurance services.\n\nThis instant news alert was generated by narrative science technology and financial data from MarketBeat in order to provide readers with the fastest and most accurate reporting. This story was reviewed by MarketBeat's editorial team prior to publication. Please send any questions or comments about this story to contact@marketbeat.com.\n\nBefore you consider Tesla, you'll want to hear this.\n\nMarketBeat keeps track of Wall Street's top-rated and best performing research analysts and the stocks they recommend to their clients on a daily basis. MarketBeat has identified the five stocks that top analysts are quietly whispering to their clients to buy now before the broader market catches on... and Tesla wasn't on the list.\n\nWhile Tesla currently has a \"Hold\" rating among analysts, top-rated analysts believe these five stocks are better buys.",
        source: {
          uri: "marketbeat.com",
          dataType: "news",
          title: "Market Beat",
        },
        authors: [],
        concepts: [
          {
            uri: "http://en.wikipedia.org/wiki/Tesla,_Inc.",
            type: "org",
            score: 5,
            label: {
              eng: "Tesla, Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Electric_vehicle",
            type: "wiki",
            score: 5,
            label: {
              eng: "Electric vehicle",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Wealth_management",
            type: "wiki",
            score: 4,
            label: {
              eng: "Wealth management",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Institutional_investor",
            type: "wiki",
            score: 4,
            label: {
              eng: "Institutional investor",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Investment_management",
            type: "wiki",
            score: 4,
            label: {
              eng: "Investment management",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Hedge_fund",
            type: "wiki",
            score: 4,
            label: {
              eng: "Hedge fund",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/U.S._Securities_and_Exchange_Commission",
            type: "wiki",
            score: 4,
            label: {
              eng: "U.S. Securities and Exchange Commission",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Chief_financial_officer",
            type: "wiki",
            score: 3,
            label: {
              eng: "Chief financial officer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Earnings_per_share",
            type: "wiki",
            score: 3,
            label: {
              eng: "Earnings per share",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Beta_(finance)",
            type: "wiki",
            score: 2,
            label: {
              eng: "Beta (finance)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Debt-to-equity_ratio",
            type: "wiki",
            score: 2,
            label: {
              eng: "Debt-to-equity ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Return_on_equity",
            type: "wiki",
            score: 2,
            label: {
              eng: "Return on equity",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Market_capitalization",
            type: "wiki",
            score: 2,
            label: {
              eng: "Market capitalization",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Price–earnings_ratio",
            type: "wiki",
            score: 2,
            label: {
              eng: "Price–earnings ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Truist_Financial",
            type: "wiki",
            score: 1,
            label: {
              eng: "Truist Financial",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Jefferies_Financial_Group",
            type: "org",
            score: 1,
            label: {
              eng: "Jefferies Financial Group",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Wall_Street",
            type: "wiki",
            score: 1,
            label: {
              eng: "Wall Street",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Vehicle_insurance",
            type: "wiki",
            score: 1,
            label: {
              eng: "Vehicle insurance",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Bank_of_America",
            type: "org",
            score: 1,
            label: {
              eng: "Bank of America",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Morgan_Stanley",
            type: "org",
            score: 1,
            label: {
              eng: "Morgan Stanley",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Stock",
            type: "wiki",
            score: 1,
            label: {
              eng: "Stock",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Automotive_industry",
            type: "wiki",
            score: 1,
            label: {
              eng: "Automotive industry",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/United_States",
            type: "loc",
            score: 1,
            label: {
              eng: "United States",
            },
            location: {
              type: "country",
              label: {
                eng: "United States",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/China",
            type: "loc",
            score: 1,
            label: {
              eng: "China",
            },
            location: {
              type: "country",
              label: {
                eng: "China",
              },
            },
          },
        ],
        categories: [
          {
            uri: "dmoz/Business/Investing",
            label: "dmoz/Business/Investing",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Stocks_and_Bonds",
            label: "dmoz/Business/Investing/Stocks and Bonds",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Brokerages",
            label: "dmoz/Business/Investing/Brokerages",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Financial_Services/Cash_Flow",
            label: "dmoz/Business/Financial Services/Cash Flow",
            wgt: 100,
          },
          {
            uri: "news/Business",
            label: "news/Business",
            wgt: 98,
          },
        ],
        image:
          "https://www.marketbeat.com/images/marketbeat-logo-1200-1200.jpg?v=1",
        eventUri: null,
        location: null,
        shares: {},
        sentiment: 0.6392156862745098,
        wgt: 478259597,
        relevance: 38,
      },
      {
        uri: "8565563566",
        lang: "eng",
        isDuplicate: false,
        date: "2025-02-26",
        time: "09:45:26",
        dateTime: "2025-02-26T09:45:26Z",
        dateTimePub: "2025-02-26T09:40:20Z",
        dataType: "news",
        sim: 0,
        url: "https://www.marketbeat.com/instant-alerts/howard-capital-management-inc-has-3541-million-position-in-tesla-inc-nasdaqtsla-2025-02-26/",
        title:
          "Howard Capital Management Inc. Has $35.41 Million Position in Tesla, Inc. (NASDAQ:TSLA)",
        body: 'Howard Capital Management Inc. increased its position in Tesla, Inc. (NASDAQ:TSLA - Free Report) by 3.3% in the 4th quarter, according to its most recent disclosure with the Securities and Exchange Commission (SEC). The firm owned 87,674 shares of the electric vehicle producer\'s stock after buying an additional 2,795 shares during the quarter. Tesla accounts for approximately 0.4% of Howard Capital Management Inc.\'s investment portfolio, making the stock its 26th largest position. Howard Capital Management Inc.\'s holdings in Tesla were worth $35,406,000 at the end of the most recent quarter.\n\nOther institutional investors and hedge funds have also added to or reduced their stakes in the company. Transcendent Capital Group LLC acquired a new stake in Tesla during the 3rd quarter valued at approximately $29,000. Farmers & Merchants Trust Co of Chambersburg PA acquired a new stake in Tesla during the 4th quarter valued at approximately $46,000. PayPay Securities Corp increased its position in Tesla by 130.2% during the 4th quarter. PayPay Securities Corp now owns 122 shares of the electric vehicle producer\'s stock valued at $49,000 after purchasing an additional 69 shares during the period. Peterson Financial Group Inc. bought a new position in shares of Tesla during the 3rd quarter worth approximately $35,000. Finally, Finley Financial LLC bought a new position in shares of Tesla during the 4th quarter worth approximately $64,000. Institutional investors and hedge funds own 66.20% of the company\'s stock.\n\nTSLA has been the topic of a number of research analyst reports. Guggenheim restated a "sell" rating on shares of Tesla in a report on Tuesday. The Goldman Sachs Group restated a "cautious" rating on shares of Tesla in a report on Monday, February 10th. Piper Sandler increased their price target on Tesla from $315.00 to $500.00 and gave the stock an "overweight" rating in a report on Tuesday, January 21st. Deutsche Bank Aktiengesellschaft increased their price target on Tesla from $295.00 to $370.00 and gave the stock a "buy" rating in a report on Monday, December 9th. Finally, UBS Group increased their price target on Tesla from $226.00 to $259.00 and gave the stock a "sell" rating in a report on Thursday, January 30th. Ten research analysts have rated the stock with a sell rating, eleven have issued a hold rating, sixteen have assigned a buy rating and one has given a strong buy rating to the stock. According to data from MarketBeat, the company currently has a consensus rating of "Hold" and a consensus price target of $319.57.\n\nView Our Latest Analysis on Tesla\n\nIn related news, CFO Vaibhav Taneja sold 7,000 shares of the business\'s stock in a transaction that occurred on Monday, December 2nd. The stock was sold at an average price of $354.43, for a total value of $2,481,010.00. Following the completion of the sale, the chief financial officer now owns 105,032 shares in the company, valued at $37,226,491.76. The trade was a 6.25 % decrease in their position. The transaction was disclosed in a filing with the SEC, which is available through the SEC website. Also, Director Kathleen Wilson-Thompson sold 100,000 shares of the business\'s stock in a transaction that occurred on Wednesday, December 4th. The stock was sold at an average price of $352.54, for a total value of $35,254,000.00. Following the completion of the sale, the director now owns 5,400 shares of the company\'s stock, valued at $1,903,716. The trade was a 94.88 % decrease in their position. The disclosure for this sale can be found here. In the last 90 days, insiders sold 523,386 shares of company stock worth $195,995,200. 20.70% of the stock is currently owned by insiders.\n\nShares of TSLA opened at $302.80 on Wednesday. The business has a 50-day moving average of $393.98 and a 200 day moving average of $315.69. Tesla, Inc. has a fifty-two week low of $138.80 and a fifty-two week high of $488.54. The firm has a market cap of $973.96 billion, a P/E ratio of 148.43, a price-to-earnings-growth ratio of 5.86 and a beta of 2.34. The company has a debt-to-equity ratio of 0.08, a quick ratio of 1.61 and a current ratio of 2.02.\n\nTesla (NASDAQ:TSLA - Get Free Report) last issued its earnings results on Wednesday, January 29th. The electric vehicle producer reported $0.66 EPS for the quarter, missing the consensus estimate of $0.74 by ($0.08). Tesla had a return on equity of 10.31% and a net margin of 7.26%. As a group, research analysts forecast that Tesla, Inc. will post 2.56 EPS for the current year.\n\nTesla, Inc designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. The company operates in two segments, Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells automotive regulatory credits; and non-warranty after-sales vehicle, used vehicles, body shop and parts, supercharging, retail merchandise, and vehicle insurance services.\n\nThis instant news alert was generated by narrative science technology and financial data from MarketBeat in order to provide readers with the fastest and most accurate reporting. This story was reviewed by MarketBeat\'s editorial team prior to publication. Please send any questions or comments about this story to contact@marketbeat.com.\n\nBefore you consider Tesla, you\'ll want to hear this.\n\nMarketBeat keeps track of Wall Street\'s top-rated and best performing research analysts and the stocks they recommend to their clients on a daily basis. MarketBeat has identified the five stocks that top analysts are quietly whispering to their clients to buy now before the broader market catches on... and Tesla wasn\'t on the list.\n\nWhile Tesla currently has a "Hold" rating among analysts, top-rated analysts believe these five stocks are better buys.',
        source: {
          uri: "marketbeat.com",
          dataType: "news",
          title: "Market Beat",
        },
        authors: [],
        concepts: [
          {
            uri: "http://en.wikipedia.org/wiki/Tesla,_Inc.",
            type: "org",
            score: 5,
            label: {
              eng: "Tesla, Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Electric_vehicle",
            type: "wiki",
            score: 5,
            label: {
              eng: "Electric vehicle",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Institutional_investor",
            type: "wiki",
            score: 4,
            label: {
              eng: "Institutional investor",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Hedge_fund",
            type: "wiki",
            score: 4,
            label: {
              eng: "Hedge fund",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/U.S._Securities_and_Exchange_Commission",
            type: "wiki",
            score: 4,
            label: {
              eng: "U.S. Securities and Exchange Commission",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Chief_financial_officer",
            type: "wiki",
            score: 3,
            label: {
              eng: "Chief financial officer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Portfolio_(finance)",
            type: "wiki",
            score: 3,
            label: {
              eng: "Portfolio (finance)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Pennsylvania",
            type: "loc",
            score: 3,
            label: {
              eng: "Pennsylvania",
            },
            location: {
              type: "place",
              label: {
                eng: "Pennsylvania",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/UBS",
            type: "org",
            score: 2,
            label: {
              eng: "UBS",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Aktiengesellschaft",
            type: "wiki",
            score: 2,
            label: {
              eng: "Aktiengesellschaft",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Deutsche_Bank",
            type: "org",
            score: 2,
            label: {
              eng: "Deutsche Bank",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Financial_analyst",
            type: "wiki",
            score: 2,
            label: {
              eng: "Financial analyst",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Goldman_Sachs",
            type: "org",
            score: 2,
            label: {
              eng: "Goldman Sachs",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Beta_(finance)",
            type: "wiki",
            score: 1,
            label: {
              eng: "Beta (finance)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Quick_ratio",
            type: "wiki",
            score: 1,
            label: {
              eng: "Quick ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Debt-to-equity_ratio",
            type: "wiki",
            score: 1,
            label: {
              eng: "Debt-to-equity ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Return_on_equity",
            type: "wiki",
            score: 1,
            label: {
              eng: "Return on equity",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Wall_Street",
            type: "wiki",
            score: 1,
            label: {
              eng: "Wall Street",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Vehicle_insurance",
            type: "wiki",
            score: 1,
            label: {
              eng: "Vehicle insurance",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Earnings_per_share",
            type: "wiki",
            score: 1,
            label: {
              eng: "Earnings per share",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Market_capitalization",
            type: "wiki",
            score: 1,
            label: {
              eng: "Market capitalization",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Price–earnings_ratio",
            type: "wiki",
            score: 1,
            label: {
              eng: "Price–earnings ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Stock",
            type: "wiki",
            score: 1,
            label: {
              eng: "Stock",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Automotive_industry",
            type: "wiki",
            score: 1,
            label: {
              eng: "Automotive industry",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/United_States",
            type: "loc",
            score: 1,
            label: {
              eng: "United States",
            },
            location: {
              type: "country",
              label: {
                eng: "United States",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/China",
            type: "loc",
            score: 1,
            label: {
              eng: "China",
            },
            location: {
              type: "country",
              label: {
                eng: "China",
              },
            },
          },
        ],
        categories: [
          {
            uri: "dmoz/Business/Investing",
            label: "dmoz/Business/Investing",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Stocks_and_Bonds",
            label: "dmoz/Business/Investing/Stocks and Bonds",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Brokerages",
            label: "dmoz/Business/Investing/Brokerages",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Financial_Services/Cash_Flow",
            label: "dmoz/Business/Financial Services/Cash Flow",
            wgt: 100,
          },
          {
            uri: "news/Business",
            label: "news/Business",
            wgt: 98,
          },
        ],
        image:
          "https://www.marketbeat.com/images/marketbeat-logo-1200-1200.jpg?v=1",
        eventUri: null,
        location: null,
        shares: {},
        sentiment: 0.4509803921568627,
        wgt: 478259126,
        relevance: 38,
      },
      {
        uri: "8565563567",
        lang: "eng",
        isDuplicate: false,
        date: "2025-02-26",
        time: "09:42:44",
        dateTime: "2025-02-26T09:42:44Z",
        dateTimePub: "2025-02-26T09:40:20Z",
        dataType: "news",
        sim: 0,
        url: "https://www.marketbeat.com/instant-alerts/integral-investment-advisors-inc-sells-1512-shares-of-tesla-inc-nasdaqtsla-2025-02-26/",
        title:
          "Integral Investment Advisors Inc. Sells 1,512 Shares of Tesla, Inc. (NASDAQ:TSLA)",
        body: 'Integral Investment Advisors Inc. cut its stake in shares of Tesla, Inc. (NASDAQ:TSLA - Free Report) by 20.1% during the 4th quarter, according to its most recent 13F filing with the Securities and Exchange Commission. The fund owned 6,017 shares of the electric vehicle producer\'s stock after selling 1,512 shares during the quarter. Tesla accounts for about 0.8% of Integral Investment Advisors Inc.\'s portfolio, making the stock its 26th largest position. Integral Investment Advisors Inc.\'s holdings in Tesla were worth $2,430,000 as of its most recent filing with the Securities and Exchange Commission.\n\nA number of other institutional investors have also recently added to or reduced their stakes in the business. Hengehold Capital Management LLC grew its holdings in Tesla by 1.8% during the 4th quarter. Hengehold Capital Management LLC now owns 1,347 shares of the electric vehicle producer\'s stock worth $544,000 after acquiring an additional 24 shares during the last quarter. Strategic Investment Advisors MI grew its holdings in Tesla by 0.3% during the 4th quarter. Strategic Investment Advisors MI now owns 6,990 shares of the electric vehicle producer\'s stock worth $2,823,000 after acquiring an additional 24 shares during the last quarter. Acropolis Investment Management LLC grew its holdings in Tesla by 0.9% during the 4th quarter. Acropolis Investment Management LLC now owns 2,814 shares of the electric vehicle producer\'s stock worth $1,136,000 after acquiring an additional 25 shares during the last quarter. Mount Vernon Associates Inc. MD grew its holdings in Tesla by 0.3% during the 4th quarter. Mount Vernon Associates Inc. MD now owns 7,305 shares of the electric vehicle producer\'s stock worth $2,950,000 after acquiring an additional 25 shares during the last quarter. Finally, Vista Finance LLC lifted its position in shares of Tesla by 0.7% in the 4th quarter. Vista Finance LLC now owns 3,510 shares of the electric vehicle producer\'s stock worth $1,417,000 after purchasing an additional 25 shares during the period. 66.20% of the stock is owned by institutional investors.\n\nA number of research analysts have recently issued reports on TSLA shares. Stifel Nicolaus dropped their price target on shares of Tesla from $492.00 to $474.00 and set a "buy" rating on the stock in a research report on Monday, February 10th. Glj Research restated a "sell" rating and issued a $24.86 price target on shares of Tesla in a research report on Wednesday, February 12th. Morgan Stanley restated an "overweight" rating on shares of Tesla in a research report on Tuesday, February 18th. The Goldman Sachs Group restated a "cautious" rating on shares of Tesla in a research report on Monday, February 10th. Finally, StockNews.com downgraded shares of Tesla from a "hold" rating to a "sell" rating in a research report on Friday, January 31st. Ten investment analysts have rated the stock with a sell rating, eleven have assigned a hold rating, sixteen have given a buy rating and one has given a strong buy rating to the company. Based on data from MarketBeat.com, the company presently has a consensus rating of "Hold" and an average target price of $319.57.\n\nView Our Latest Stock Report on Tesla\n\nNASDAQ TSLA opened at $302.80 on Wednesday. The company has a market cap of $973.96 billion, a PE ratio of 148.43, a price-to-earnings-growth ratio of 5.86 and a beta of 2.34. Tesla, Inc. has a 52 week low of $138.80 and a 52 week high of $488.54. The company has a quick ratio of 1.61, a current ratio of 2.02 and a debt-to-equity ratio of 0.08. The firm\'s 50-day simple moving average is $393.98 and its two-hundred day simple moving average is $315.69.\n\nTesla (NASDAQ:TSLA - Get Free Report) last announced its quarterly earnings results on Wednesday, January 29th. The electric vehicle producer reported $0.66 earnings per share (EPS) for the quarter, missing analysts\' consensus estimates of $0.74 by ($0.08). Tesla had a return on equity of 10.31% and a net margin of 7.26%. Research analysts predict that Tesla, Inc. will post 2.56 earnings per share for the current year.\n\nIn other news, CFO Vaibhav Taneja sold 7,000 shares of the stock in a transaction dated Monday, December 2nd. The shares were sold at an average price of $354.43, for a total value of $2,481,010.00. Following the sale, the chief financial officer now directly owns 105,032 shares of the company\'s stock, valued at approximately $37,226,491.76. This represents a 6.25 % decrease in their ownership of the stock. The sale was disclosed in a filing with the SEC, which can be accessed through the SEC website. Also, Director Kathleen Wilson-Thompson sold 100,000 shares of the stock in a transaction dated Wednesday, December 4th. The stock was sold at an average price of $352.54, for a total transaction of $35,254,000.00. Following the completion of the sale, the director now directly owns 5,400 shares in the company, valued at approximately $1,903,716. The trade was a 94.88 % decrease in their ownership of the stock. The disclosure for this sale can be found here. Over the last ninety days, insiders have sold 523,386 shares of company stock valued at $195,995,200. 20.70% of the stock is currently owned by corporate insiders.\n\nTesla, Inc designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. The company operates in two segments, Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells automotive regulatory credits; and non-warranty after-sales vehicle, used vehicles, body shop and parts, supercharging, retail merchandise, and vehicle insurance services.\n\nThis instant news alert was generated by narrative science technology and financial data from MarketBeat in order to provide readers with the fastest and most accurate reporting. This story was reviewed by MarketBeat\'s editorial team prior to publication. Please send any questions or comments about this story to contact@marketbeat.com.\n\nBefore you consider Tesla, you\'ll want to hear this.\n\nMarketBeat keeps track of Wall Street\'s top-rated and best performing research analysts and the stocks they recommend to their clients on a daily basis. MarketBeat has identified the five stocks that top analysts are quietly whispering to their clients to buy now before the broader market catches on... and Tesla wasn\'t on the list.\n\nWhile Tesla currently has a "Hold" rating among analysts, top-rated analysts believe these five stocks are better buys.',
        source: {
          uri: "marketbeat.com",
          dataType: "news",
          title: "Market Beat",
        },
        authors: [],
        concepts: [
          {
            uri: "http://en.wikipedia.org/wiki/Tesla,_Inc.",
            type: "org",
            score: 5,
            label: {
              eng: "Tesla, Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Electric_vehicle",
            type: "wiki",
            score: 5,
            label: {
              eng: "Electric vehicle",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/U.S._Securities_and_Exchange_Commission",
            type: "wiki",
            score: 5,
            label: {
              eng: "U.S. Securities and Exchange Commission",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Institutional_investor",
            type: "wiki",
            score: 4,
            label: {
              eng: "Institutional investor",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Investment_management",
            type: "wiki",
            score: 4,
            label: {
              eng: "Investment management",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Chief_executive_officer",
            type: "wiki",
            score: 4,
            label: {
              eng: "Chief executive officer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Michigan",
            type: "loc",
            score: 4,
            label: {
              eng: "Michigan",
            },
            location: {
              type: "place",
              label: {
                eng: "Michigan",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Earnings_per_share",
            type: "wiki",
            score: 3,
            label: {
              eng: "Earnings per share",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Nasdaq",
            type: "wiki",
            score: 2,
            label: {
              eng: "Nasdaq",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Beta_(finance)",
            type: "wiki",
            score: 2,
            label: {
              eng: "Beta (finance)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Debt-to-equity_ratio",
            type: "wiki",
            score: 2,
            label: {
              eng: "Debt-to-equity ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Stifel",
            type: "org",
            score: 2,
            label: {
              eng: "Stifel",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Obesity",
            type: "wiki",
            score: 2,
            label: {
              eng: "Obesity",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Chief_financial_officer",
            type: "wiki",
            score: 2,
            label: {
              eng: "Chief financial officer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Morgan_Stanley",
            type: "org",
            score: 2,
            label: {
              eng: "Morgan Stanley",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Moving_average",
            type: "wiki",
            score: 2,
            label: {
              eng: "Moving average",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Market_capitalization",
            type: "wiki",
            score: 2,
            label: {
              eng: "Market capitalization",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Price–earnings_ratio",
            type: "wiki",
            score: 2,
            label: {
              eng: "Price–earnings ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Goldman_Sachs",
            type: "org",
            score: 2,
            label: {
              eng: "Goldman Sachs",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Return_on_equity",
            type: "wiki",
            score: 1,
            label: {
              eng: "Return on equity",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Wall_Street",
            type: "wiki",
            score: 1,
            label: {
              eng: "Wall Street",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Vehicle_insurance",
            type: "wiki",
            score: 1,
            label: {
              eng: "Vehicle insurance",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Stock",
            type: "wiki",
            score: 1,
            label: {
              eng: "Stock",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Automotive_industry",
            type: "wiki",
            score: 1,
            label: {
              eng: "Automotive industry",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/United_States",
            type: "loc",
            score: 1,
            label: {
              eng: "United States",
            },
            location: {
              type: "country",
              label: {
                eng: "United States",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/China",
            type: "loc",
            score: 1,
            label: {
              eng: "China",
            },
            location: {
              type: "country",
              label: {
                eng: "China",
              },
            },
          },
        ],
        categories: [
          {
            uri: "dmoz/Business/Investing",
            label: "dmoz/Business/Investing",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Stocks_and_Bonds",
            label: "dmoz/Business/Investing/Stocks and Bonds",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Brokerages",
            label: "dmoz/Business/Investing/Brokerages",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Financial_Services/Cash_Flow",
            label: "dmoz/Business/Financial Services/Cash Flow",
            wgt: 100,
          },
          {
            uri: "news/Business",
            label: "news/Business",
            wgt: 98,
          },
        ],
        image:
          "https://www.marketbeat.com/images/marketbeat-logo-1200-1200.jpg?v=1",
        eventUri: null,
        location: null,
        shares: {},
        sentiment: 0.3019607843137255,
        wgt: 478258964,
        relevance: 38,
      },
      {
        uri: "8565563568",
        lang: "eng",
        isDuplicate: false,
        date: "2025-02-26",
        time: "09:41:33",
        dateTime: "2025-02-26T09:41:33Z",
        dateTimePub: "2025-02-26T09:40:20Z",
        dataType: "news",
        sim: 0,
        url: "https://www.marketbeat.com/instant-alerts/2400-shares-in-tesla-inc-nasdaqtsla-acquired-by-new-england-professional-planning-group-inc-2025-02-26/",
        title:
          "2,400 Shares in Tesla, Inc. (NASDAQ:TSLA) Acquired by New England Professional Planning Group Inc.",
        body: "New England Professional Planning Group Inc. purchased a new position in shares of Tesla, Inc. (NASDAQ:TSLA - Free Report) in the 4th quarter, according to its most recent 13F filing with the Securities and Exchange Commission (SEC). The firm purchased 2,400 shares of the electric vehicle producer's stock, valued at approximately $969,000. Tesla accounts for approximately 0.5% of New England Professional Planning Group Inc.'s investment portfolio, making the stock its 11th biggest holding.\n\nOther institutional investors have also made changes to their positions in the company. Geode Capital Management LLC raised its position in Tesla by 1.8% during the third quarter. Geode Capital Management LLC now owns 59,356,401 shares of the electric vehicle producer's stock valued at $15,469,792,000 after acquiring an additional 1,022,589 shares in the last quarter. FMR LLC raised its position in Tesla by 3.5% during the third quarter. FMR LLC now owns 24,741,075 shares of the electric vehicle producer's stock valued at $6,473,008,000 after acquiring an additional 828,308 shares in the last quarter. UBS AM a distinct business unit of UBS ASSET MANAGEMENT AMERICAS LLC raised its position in Tesla by 13.7% during the third quarter. UBS AM a distinct business unit of UBS ASSET MANAGEMENT AMERICAS LLC now owns 24,377,822 shares of the electric vehicle producer's stock valued at $6,377,970,000 after acquiring an additional 2,946,763 shares in the last quarter. Charles Schwab Investment Management Inc. raised its position in Tesla by 1.9% during the third quarter. Charles Schwab Investment Management Inc. now owns 16,545,824 shares of the electric vehicle producer's stock valued at $4,328,884,000 after acquiring an additional 301,968 shares in the last quarter. Finally, Jennison Associates LLC raised its position in Tesla by 11.9% during the third quarter. Jennison Associates LLC now owns 12,201,212 shares of the electric vehicle producer's stock valued at $3,192,203,000 after acquiring an additional 1,294,093 shares in the last quarter. 66.20% of the stock is currently owned by institutional investors and hedge funds.\n\nTSLA opened at $302.80 on Wednesday. Tesla, Inc. has a fifty-two week low of $138.80 and a fifty-two week high of $488.54. The company has a debt-to-equity ratio of 0.08, a current ratio of 2.02 and a quick ratio of 1.61. The firm's fifty day moving average price is $393.98 and its two-hundred day moving average price is $315.69. The company has a market capitalization of $973.96 billion, a P/E ratio of 148.43, a P/E/G ratio of 5.86 and a beta of 2.34.\n\nTesla (NASDAQ:TSLA - Get Free Report) last posted its quarterly earnings results on Wednesday, January 29th. The electric vehicle producer reported $0.66 earnings per share for the quarter, missing analysts' consensus estimates of $0.74 by ($0.08). Tesla had a return on equity of 10.31% and a net margin of 7.26%. On average, analysts anticipate that Tesla, Inc. will post 2.56 EPS for the current year.\n\nIn other news, Director Robyn M. Denholm sold 112,390 shares of the business's stock in a transaction on Monday, December 2nd. The shares were sold at an average price of $354.06, for a total value of $39,792,803.40. Following the sale, the director now owns 85,000 shares in the company, valued at approximately $30,095,100. The trade was a 56.94 % decrease in their position. The sale was disclosed in a document filed with the Securities & Exchange Commission, which is accessible through this link. Also, CFO Vaibhav Taneja sold 7,000 shares of the business's stock in a transaction on Monday, December 2nd. The shares were sold at an average price of $354.43, for a total transaction of $2,481,010.00. Following the completion of the sale, the chief financial officer now owns 105,032 shares in the company, valued at $37,226,491.76. This represents a 6.25 % decrease in their position. The disclosure for this sale can be found here. In the last quarter, insiders have sold 523,386 shares of company stock worth $195,995,200. Corporate insiders own 20.70% of the company's stock.\n\nSeveral equities analysts recently weighed in on the stock. Cantor Fitzgerald reaffirmed a \"neutral\" rating and set a $365.00 price objective on shares of Tesla in a research report on Wednesday, January 29th. Glj Research reaffirmed a \"sell\" rating and set a $24.86 price objective on shares of Tesla in a research report on Wednesday, February 12th. Evercore ISI lifted their price target on shares of Tesla from $195.00 to $275.00 and gave the company an \"in-line\" rating in a research report on Friday, January 3rd. StockNews.com lowered shares of Tesla from a \"hold\" rating to a \"sell\" rating in a research report on Friday, January 31st. Finally, UBS Group lifted their price target on shares of Tesla from $226.00 to $259.00 and gave the company a \"sell\" rating in a research report on Thursday, January 30th. Ten research analysts have rated the stock with a sell rating, eleven have assigned a hold rating, sixteen have issued a buy rating and one has assigned a strong buy rating to the company's stock. According to data from MarketBeat.com, the stock currently has a consensus rating of \"Hold\" and a consensus target price of $319.57.\n\nView Our Latest Stock Report on Tesla\n\nTesla, Inc designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. The company operates in two segments, Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells automotive regulatory credits; and non-warranty after-sales vehicle, used vehicles, body shop and parts, supercharging, retail merchandise, and vehicle insurance services.\n\nThis instant news alert was generated by narrative science technology and financial data from MarketBeat in order to provide readers with the fastest and most accurate reporting. This story was reviewed by MarketBeat's editorial team prior to publication. Please send any questions or comments about this story to contact@marketbeat.com.\n\nBefore you consider Tesla, you'll want to hear this.\n\nMarketBeat keeps track of Wall Street's top-rated and best performing research analysts and the stocks they recommend to their clients on a daily basis. MarketBeat has identified the five stocks that top analysts are quietly whispering to their clients to buy now before the broader market catches on... and Tesla wasn't on the list.\n\nWhile Tesla currently has a \"Hold\" rating among analysts, top-rated analysts believe these five stocks are better buys.",
        source: {
          uri: "marketbeat.com",
          dataType: "news",
          title: "Market Beat",
        },
        authors: [],
        concepts: [
          {
            uri: "http://en.wikipedia.org/wiki/Geode_Capital_Management",
            type: "wiki",
            score: 5,
            label: {
              eng: "Geode Capital Management",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Tesla,_Inc.",
            type: "org",
            score: 5,
            label: {
              eng: "Tesla, Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/UBS",
            type: "org",
            score: 5,
            label: {
              eng: "UBS",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/New_England",
            type: "loc",
            score: 5,
            label: {
              eng: "New England",
            },
            location: {
              type: "place",
              label: {
                eng: "New England",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Electric_vehicle",
            type: "wiki",
            score: 5,
            label: {
              eng: "Electric vehicle",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/PGIM",
            type: "org",
            score: 4,
            label: {
              eng: "PGIM",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Charles_Schwab_Corporation",
            type: "org",
            score: 4,
            label: {
              eng: "Charles Schwab Corporation",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Institutional_investor",
            type: "wiki",
            score: 4,
            label: {
              eng: "Institutional investor",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Investment_management",
            type: "wiki",
            score: 4,
            label: {
              eng: "Investment management",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/U.S._Securities_and_Exchange_Commission",
            type: "wiki",
            score: 4,
            label: {
              eng: "U.S. Securities and Exchange Commission",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Portfolio_(finance)",
            type: "wiki",
            score: 3,
            label: {
              eng: "Portfolio (finance)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Earnings_per_share",
            type: "wiki",
            score: 3,
            label: {
              eng: "Earnings per share",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Price–earnings_ratio",
            type: "wiki",
            score: 3,
            label: {
              eng: "Price–earnings ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Beta_(finance)",
            type: "wiki",
            score: 2,
            label: {
              eng: "Beta (finance)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Debt-to-equity_ratio",
            type: "wiki",
            score: 2,
            label: {
              eng: "Debt-to-equity ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Return_on_equity",
            type: "wiki",
            score: 2,
            label: {
              eng: "Return on equity",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Chief_financial_officer",
            type: "wiki",
            score: 2,
            label: {
              eng: "Chief financial officer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Hedge_fund",
            type: "wiki",
            score: 2,
            label: {
              eng: "Hedge fund",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Market_capitalization",
            type: "wiki",
            score: 2,
            label: {
              eng: "Market capitalization",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Evercore",
            type: "org",
            score: 1,
            label: {
              eng: "Evercore",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Wall_Street",
            type: "wiki",
            score: 1,
            label: {
              eng: "Wall Street",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Cantor_Fitzgerald",
            type: "org",
            score: 1,
            label: {
              eng: "Cantor Fitzgerald",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Vehicle_insurance",
            type: "wiki",
            score: 1,
            label: {
              eng: "Vehicle insurance",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Stock",
            type: "wiki",
            score: 1,
            label: {
              eng: "Stock",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Automotive_industry",
            type: "wiki",
            score: 1,
            label: {
              eng: "Automotive industry",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/United_States",
            type: "loc",
            score: 1,
            label: {
              eng: "United States",
            },
            location: {
              type: "country",
              label: {
                eng: "United States",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/China",
            type: "loc",
            score: 1,
            label: {
              eng: "China",
            },
            location: {
              type: "country",
              label: {
                eng: "China",
              },
            },
          },
        ],
        categories: [
          {
            uri: "dmoz/Business/Investing",
            label: "dmoz/Business/Investing",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Stocks_and_Bonds",
            label: "dmoz/Business/Investing/Stocks and Bonds",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Brokerages",
            label: "dmoz/Business/Investing/Brokerages",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Financial_Services/Cash_Flow",
            label: "dmoz/Business/Financial Services/Cash Flow",
            wgt: 100,
          },
          {
            uri: "news/Business",
            label: "news/Business",
            wgt: 99,
          },
        ],
        image:
          "https://www.marketbeat.com/images/marketbeat-logo-1200-1200.jpg?v=1",
        eventUri: null,
        location: {
          type: "place",
          label: {
            eng: "New England",
          },
          country: {
            type: "country",
            label: {
              eng: "United States",
            },
          },
        },
        shares: {},
        sentiment: 0.4274509803921569,
        wgt: 478258893,
        relevance: 38,
      },
      {
        uri: "8565563569",
        lang: "eng",
        isDuplicate: false,
        date: "2025-02-26",
        time: "09:41:17",
        dateTime: "2025-02-26T09:41:17Z",
        dateTimePub: "2025-02-26T09:40:20Z",
        dataType: "news",
        sim: 0.6000000238418579,
        url: "https://www.marketbeat.com/instant-alerts/tesla-inc-nasdaqtsla-stock-position-reduced-by-matthew-25-management-corp-2025-02-26/",
        title:
          "Tesla, Inc. (NASDAQ:TSLA) Stock Position Reduced by Matthew 25 Management Corp",
        body: 'Matthew 25 Management Corp cut its position in shares of Tesla, Inc. (NASDAQ:TSLA - Free Report) by 8.0% during the fourth quarter, according to its most recent Form 13F filing with the Securities and Exchange Commission (SEC). The firm owned 57,500 shares of the electric vehicle producer\'s stock after selling 5,000 shares during the period. Tesla makes up 7.4% of Matthew 25 Management Corp\'s holdings, making the stock its 4th biggest holding. Matthew 25 Management Corp\'s holdings in Tesla were worth $23,221,000 at the end of the most recent quarter.\n\nOther institutional investors also recently bought and sold shares of the company. Transcendent Capital Group LLC purchased a new stake in Tesla during the 3rd quarter worth approximately $29,000. Farmers & Merchants Trust Co of Chambersburg PA purchased a new stake in Tesla during the 4th quarter worth approximately $46,000. PayPay Securities Corp increased its stake in Tesla by 130.2% during the 4th quarter. PayPay Securities Corp now owns 122 shares of the electric vehicle producer\'s stock worth $49,000 after buying an additional 69 shares during the period. Peterson Financial Group Inc. purchased a new stake in Tesla during the 3rd quarter worth approximately $35,000. Finally, Finley Financial LLC purchased a new stake in Tesla during the 4th quarter worth approximately $64,000. 66.20% of the stock is owned by hedge funds and other institutional investors.\n\nSeveral research analysts have commented on TSLA shares. Wells Fargo & Company boosted their price target on shares of Tesla from $125.00 to $135.00 and gave the stock an "underweight" rating in a report on Thursday, January 30th. Mizuho reiterated an "outperform" rating and set a $515.00 price target on shares of Tesla in a report on Thursday, January 30th. Stifel Nicolaus lowered their price target on shares of Tesla from $492.00 to $474.00 and set a "buy" rating for the company in a report on Monday, February 10th. Piper Sandler boosted their price target on shares of Tesla from $315.00 to $500.00 and gave the stock an "overweight" rating in a report on Tuesday, January 21st. Finally, Guggenheim reiterated a "sell" rating on shares of Tesla in a report on Tuesday. Ten research analysts have rated the stock with a sell rating, eleven have given a hold rating, sixteen have assigned a buy rating and one has given a strong buy rating to the company. According to MarketBeat.com, Tesla presently has a consensus rating of "Hold" and a consensus target price of $319.57.\n\nRead Our Latest Stock Analysis on TSLA\n\nTSLA opened at $302.80 on Wednesday. The firm has a market capitalization of $973.96 billion, a P/E ratio of 148.43, a P/E/G ratio of 5.86 and a beta of 2.34. The firm\'s 50 day moving average is $393.98 and its 200-day moving average is $315.69. Tesla, Inc. has a 52-week low of $138.80 and a 52-week high of $488.54. The company has a quick ratio of 1.61, a current ratio of 2.02 and a debt-to-equity ratio of 0.08.\n\nTesla (NASDAQ:TSLA - Get Free Report) last issued its quarterly earnings results on Wednesday, January 29th. The electric vehicle producer reported $0.66 earnings per share (EPS) for the quarter, missing analysts\' consensus estimates of $0.74 by ($0.08). Tesla had a return on equity of 10.31% and a net margin of 7.26%. Analysts expect that Tesla, Inc. will post 2.56 EPS for the current fiscal year.\n\nIn related news, Director Kathleen Wilson-Thompson sold 100,000 shares of Tesla stock in a transaction on Wednesday, December 4th. The shares were sold at an average price of $352.54, for a total value of $35,254,000.00. Following the completion of the sale, the director now owns 5,400 shares in the company, valued at approximately $1,903,716. The trade was a 94.88 % decrease in their ownership of the stock. The sale was disclosed in a filing with the Securities & Exchange Commission, which is accessible through this link. Also, CFO Vaibhav Taneja sold 7,000 shares of Tesla stock in a transaction on Monday, December 2nd. The stock was sold at an average price of $354.43, for a total transaction of $2,481,010.00. Following the completion of the transaction, the chief financial officer now directly owns 105,032 shares of the company\'s stock, valued at approximately $37,226,491.76. This represents a 6.25 % decrease in their position. The disclosure for this sale can be found here. Over the last quarter, insiders sold 523,386 shares of company stock worth $195,995,200. Insiders own 20.70% of the company\'s stock.\n\nTesla, Inc designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. The company operates in two segments, Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells automotive regulatory credits; and non-warranty after-sales vehicle, used vehicles, body shop and parts, supercharging, retail merchandise, and vehicle insurance services.\n\nThis instant news alert was generated by narrative science technology and financial data from MarketBeat in order to provide readers with the fastest and most accurate reporting. This story was reviewed by MarketBeat\'s editorial team prior to publication. Please send any questions or comments about this story to contact@marketbeat.com.\n\nBefore you consider Tesla, you\'ll want to hear this.\n\nMarketBeat keeps track of Wall Street\'s top-rated and best performing research analysts and the stocks they recommend to their clients on a daily basis. MarketBeat has identified the five stocks that top analysts are quietly whispering to their clients to buy now before the broader market catches on... and Tesla wasn\'t on the list.\n\nWhile Tesla currently has a "Hold" rating among analysts, top-rated analysts believe these five stocks are better buys.',
        source: {
          uri: "marketbeat.com",
          dataType: "news",
          title: "Market Beat",
        },
        authors: [],
        concepts: [
          {
            uri: "http://en.wikipedia.org/wiki/Tesla,_Inc.",
            type: "org",
            score: 5,
            label: {
              eng: "Tesla, Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Electric_vehicle",
            type: "wiki",
            score: 5,
            label: {
              eng: "Electric vehicle",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Institutional_investor",
            type: "wiki",
            score: 4,
            label: {
              eng: "Institutional investor",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Hedge_fund",
            type: "wiki",
            score: 3,
            label: {
              eng: "Hedge fund",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Earnings_per_share",
            type: "wiki",
            score: 3,
            label: {
              eng: "Earnings per share",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Price–earnings_ratio",
            type: "wiki",
            score: 3,
            label: {
              eng: "Price–earnings ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/U.S._Securities_and_Exchange_Commission",
            type: "wiki",
            score: 3,
            label: {
              eng: "U.S. Securities and Exchange Commission",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Pennsylvania",
            type: "loc",
            score: 3,
            label: {
              eng: "Pennsylvania",
            },
            location: {
              type: "place",
              label: {
                eng: "Pennsylvania",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Beta_(finance)",
            type: "wiki",
            score: 2,
            label: {
              eng: "Beta (finance)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Quick_ratio",
            type: "wiki",
            score: 2,
            label: {
              eng: "Quick ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Debt-to-equity_ratio",
            type: "wiki",
            score: 2,
            label: {
              eng: "Debt-to-equity ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Current_ratio",
            type: "wiki",
            score: 2,
            label: {
              eng: "Current ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Obesity",
            type: "wiki",
            score: 2,
            label: {
              eng: "Obesity",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Chief_financial_officer",
            type: "wiki",
            score: 2,
            label: {
              eng: "Chief financial officer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Wells_Fargo",
            type: "org",
            score: 2,
            label: {
              eng: "Wells Fargo",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Market_capitalization",
            type: "wiki",
            score: 2,
            label: {
              eng: "Market capitalization",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Return_on_equity",
            type: "wiki",
            score: 1,
            label: {
              eng: "Return on equity",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Wall_Street",
            type: "wiki",
            score: 1,
            label: {
              eng: "Wall Street",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Vehicle_insurance",
            type: "wiki",
            score: 1,
            label: {
              eng: "Vehicle insurance",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Fiscal_year",
            type: "wiki",
            score: 1,
            label: {
              eng: "Fiscal year",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Stock",
            type: "wiki",
            score: 1,
            label: {
              eng: "Stock",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Automotive_industry",
            type: "wiki",
            score: 1,
            label: {
              eng: "Automotive industry",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/United_States",
            type: "loc",
            score: 1,
            label: {
              eng: "United States",
            },
            location: {
              type: "country",
              label: {
                eng: "United States",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/China",
            type: "loc",
            score: 1,
            label: {
              eng: "China",
            },
            location: {
              type: "country",
              label: {
                eng: "China",
              },
            },
          },
        ],
        categories: [
          {
            uri: "dmoz/Business/Investing",
            label: "dmoz/Business/Investing",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Stocks_and_Bonds",
            label: "dmoz/Business/Investing/Stocks and Bonds",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Brokerages",
            label: "dmoz/Business/Investing/Brokerages",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Financial_Services/Cash_Flow",
            label: "dmoz/Business/Financial Services/Cash Flow",
            wgt: 100,
          },
          {
            uri: "news/Business",
            label: "news/Business",
            wgt: 99,
          },
        ],
        image:
          "https://www.marketbeat.com/images/marketbeat-logo-1200-1200.jpg?v=1",
        eventUri: "eng-10367616",
        location: null,
        shares: {},
        sentiment: 0.411764705882353,
        wgt: 478258877,
        relevance: 38,
      },
      {
        uri: "2025-02-643870847",
        lang: "eng",
        isDuplicate: true,
        date: "2025-02-26",
        time: "09:21:11",
        dateTime: "2025-02-26T09:21:11Z",
        dateTimePub: "2025-02-26T09:16:29Z",
        dataType: "news",
        sim: 0,
        url: "https://finance.yahoo.com/news/jim-cramer-worries-elon-musk-091629654.html",
        title:
          "Jim Cramer on Worries That Elon Musk's Involvement In The Government Could Be Creating Negativity For Tesla, Inc. (TSLA): 'Oh Then Sell The Stock'",
        body: "We recently compiled a list of the Jim Cramer Discusses These 12 Stocks, Elon Musk & President Trump. In this article, we are going to take a look at where Tesla, Inc. (NASDAQ:TSLA) stands against the other stocks Jim Cramer recently discussed.\n\nIn his recent appearance on CNBC's Squawk on the Street, Jim Cramer shared his thoughts about Elon Musk's Department of Government Efficiency (DOGE), Musk's role in the government, and its impact on his companies. Commenting on industry concerns about his government efficiency initiatives impacting his companies, Cramer shared that his car, AI, and rocket companies have \"seen valuations soar in recent months. So, again, the complainers, they really have to re-think their view.\" Musk \"is creating wealth,\" Cramer believes as he added that \"he's [Musk] changing the government. Cramer then wondered \"is he President Musk?\" and asked, \"Who is The Apprentice?\"\n\nWhen asked if he didn't have a problem with Musk splitting his between two companies \"No, I don't think that Dorsey, I did give him grief because it wasn't clear that he was for everyone. This guy favors every. . . .look I, he is remarkable. I just don't want him to show up here.\" He added: \"Look what do you do, when it says, Elon Musk on line two? What do you do?\"\n\nAnother hot topic that caught Cramer's attention was the SEC purportedly dropping its lawsuit against one of the most popular cryptocurrency exchanges in the US. He shared:\n\n\"Well look we always know why that it was a parochial view that Gensler took. Uh, Tim Massad over at the CFTC didn't take that view. He said it's going to be huge overseas because they got even less faith in their currencies than we have. And it's got a lot more portability than gold. Look I'm a huge believer in it. I don't know if I'm a believer in the big buck, but I am a believer in Bitcoin because I believe the thirty-six trillion, I don't know what to do with the thirty-six trillion in debt. I haven't figured that out yet, David. I thought when you spoke to Mnuchin, you would push the fifty-year bond that you know I'm a huge believer in.\"\n\nHowever, Cramer added that what former SEC chair Gary Gensler also \"really didn't like were the bogus coins! He didn't wanna see that. . .\"\n\nThe CNBC TV host also commented on AI and Elon Musk's xAI announcing its Grok 3 model Cramer thought \"it [Grok 3] was okay. I think it was okay. I don't know, I caught ChatGPT hallucinating like mad yesterday. No, look, Grok 3's okay.\" When asked whether AI could displace a substantive portion of jobs, he shared:",
        source: {
          uri: "finance.yahoo.com",
          dataType: "news",
          title: "Yahoo! Finance",
        },
        authors: [
          {
            uri: "ramish_cheema@finance.yahoo.com",
            name: "Ramish Cheema",
            type: "author",
            isAgency: false,
          },
        ],
        concepts: [
          {
            uri: "http://en.wikipedia.org/wiki/Tesla,_Inc.",
            type: "org",
            score: 5,
            label: {
              eng: "Tesla, Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Jim_Cramer",
            type: "person",
            score: 5,
            label: {
              eng: "Jim Cramer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Elon_Musk",
            type: "person",
            score: 5,
            label: {
              eng: "Elon Musk",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Pieter_Cramer",
            type: "person",
            score: 4,
            label: {
              eng: "Pieter Cramer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Donald_Trump",
            type: "person",
            score: 4,
            label: {
              eng: "Donald Trump",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Stock",
            type: "wiki",
            score: 3,
            label: {
              eng: "Stock",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/The_Apprentice_(American_TV_series)",
            type: "wiki",
            score: 2,
            label: {
              eng: "The Apprentice (American TV series)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Rocket",
            type: "wiki",
            score: 2,
            label: {
              eng: "Rocket",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Valuation_(finance)",
            type: "wiki",
            score: 2,
            label: {
              eng: "Valuation (finance)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/CNBC",
            type: "org",
            score: 2,
            label: {
              eng: "CNBC",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Artificial_intelligence",
            type: "wiki",
            score: 2,
            label: {
              eng: "Artificial intelligence",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/ChatGPT",
            type: "wiki",
            score: 1,
            label: {
              eng: "ChatGPT",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Steven_Mnuchin",
            type: "person",
            score: 1,
            label: {
              eng: "Steven Mnuchin",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Cryptocurrency_exchange",
            type: "wiki",
            score: 1,
            label: {
              eng: "Cryptocurrency exchange",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Gary_Gensler",
            type: "person",
            score: 1,
            label: {
              eng: "Gary Gensler",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Grok",
            type: "wiki",
            score: 1,
            label: {
              eng: "Grok",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Commodity_Futures_Trading_Commission",
            type: "wiki",
            score: 1,
            label: {
              eng: "Commodity Futures Trading Commission",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Coin",
            type: "wiki",
            score: 1,
            label: {
              eng: "Coin",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Bitcoin",
            type: "wiki",
            score: 1,
            label: {
              eng: "Bitcoin",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Lawsuit",
            type: "wiki",
            score: 1,
            label: {
              eng: "Lawsuit",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Currency",
            type: "wiki",
            score: 1,
            label: {
              eng: "Currency",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Gold",
            type: "wiki",
            score: 1,
            label: {
              eng: "Gold",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/U.S._Securities_and_Exchange_Commission",
            type: "wiki",
            score: 1,
            label: {
              eng: "U.S. Securities and Exchange Commission",
            },
          },
        ],
        categories: [
          {
            uri: "dmoz/Business/Investing/Stocks_and_Bonds",
            label: "dmoz/Business/Investing/Stocks and Bonds",
            wgt: 8,
          },
          {
            uri: "dmoz/Society/Issues/Business",
            label: "dmoz/Society/Issues/Business",
            wgt: 6,
          },
          {
            uri: "dmoz/Society/Issues/Government_Operations",
            label: "dmoz/Society/Issues/Government Operations",
            wgt: 8,
          },
          {
            uri: "dmoz/Shopping/Antiques_and_Collectibles/Paper_Money",
            label: "dmoz/Shopping/Antiques and Collectibles/Paper Money",
            wgt: 6,
          },
          {
            uri: "dmoz/Society/Work/Job_Sharing",
            label: "dmoz/Society/Work/Job Sharing",
            wgt: 9,
          },
          {
            uri: "news/Technology",
            label: "news/Technology",
            wgt: 57,
          },
        ],
        image:
          "https://s.yimg.com/ny/api/res/1.2/SrU07wT6zG1.AuD1zg6IGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM7Y2Y9d2VicA--/https://media.zenfs.com/en/insidermonkey.com/1277c6032fd09b727a10249a170024cf",
        eventUri: null,
        location: null,
        shares: {},
        sentiment: 0.08235294117647052,
        wgt: 478257671,
        relevance: 1,
      },
      {
        uri: "8565497685",
        lang: "eng",
        isDuplicate: false,
        date: "2025-02-26",
        time: "09:05:40",
        dateTime: "2025-02-26T09:05:40Z",
        dateTimePub: "2025-02-26T08:59:15Z",
        dataType: "news",
        sim: 0,
        url: "https://www.marketbeat.com/instant-alerts/tesla-nasdaqtsla-given-sell-rating-at-guggenheim-2025-02-26/",
        title: 'Guggenheim Reiterates "Sell" Rating for Tesla (NASDAQ:TSLA)',
        body: 'A number of other analysts have also recently commented on TSLA. Stifel Nicolaus dropped their price objective on Tesla from $492.00 to $474.00 and set a "buy" rating for the company in a research report on Monday, February 10th. Piper Sandler raised their price target on shares of Tesla from $315.00 to $500.00 and gave the stock an "overweight" rating in a research note on Tuesday, January 21st. The Goldman Sachs Group reissued a "cautious" rating on shares of Tesla in a research report on Monday, February 10th. Jefferies Financial Group raised their target price on shares of Tesla from $195.00 to $300.00 and gave the stock a "hold" rating in a research report on Thursday, November 14th. Finally, Barclays boosted their price target on Tesla from $270.00 to $325.00 and gave the company an "equal weight" rating in a report on Wednesday, January 15th. Ten research analysts have rated the stock with a sell rating, eleven have assigned a hold rating, sixteen have issued a buy rating and one has issued a strong buy rating to the company. According to MarketBeat.com, the company has a consensus rating of "Hold" and a consensus price target of $319.57.\n\nGet Our Latest Stock Report on TSLA\n\nTSLA stock opened at $302.80 on Tuesday. The company has a debt-to-equity ratio of 0.08, a current ratio of 2.02 and a quick ratio of 1.61. The company\'s 50 day simple moving average is $393.98 and its 200-day simple moving average is $315.69. Tesla has a 12 month low of $138.80 and a 12 month high of $488.54. The firm has a market capitalization of $973.96 billion, a PE ratio of 148.43, a P/E/G ratio of 5.86 and a beta of 2.34.\n\nTesla (NASDAQ:TSLA - Get Free Report) last posted its earnings results on Wednesday, January 29th. The electric vehicle producer reported $0.66 earnings per share (EPS) for the quarter, missing analysts\' consensus estimates of $0.74 by ($0.08). Tesla had a net margin of 7.26% and a return on equity of 10.31%. Equities analysts expect that Tesla will post 2.56 earnings per share for the current fiscal year.\n\nIn related news, Director Kathleen Wilson-Thompson sold 100,000 shares of the stock in a transaction dated Wednesday, December 4th. The stock was sold at an average price of $352.54, for a total value of $35,254,000.00. Following the completion of the transaction, the director now owns 5,400 shares of the company\'s stock, valued at approximately $1,903,716. This represents a 94.88 % decrease in their ownership of the stock. The sale was disclosed in a document filed with the SEC, which is accessible through this link. Also, CFO Vaibhav Taneja sold 7,000 shares of Tesla stock in a transaction that occurred on Monday, December 2nd. The stock was sold at an average price of $354.43, for a total value of $2,481,010.00. Following the sale, the chief financial officer now owns 105,032 shares in the company, valued at $37,226,491.76. This represents a 6.25 % decrease in their ownership of the stock. The disclosure for this sale can be found here. In the last three months, insiders sold 523,386 shares of company stock valued at $195,995,200. Corporate insiders own 20.70% of the company\'s stock.\n\nA number of hedge funds have recently made changes to their positions in the stock. True Wealth Design LLC grew its holdings in Tesla by 79.5% during the 4th quarter. True Wealth Design LLC now owns 70 shares of the electric vehicle producer\'s stock worth $28,000 after acquiring an additional 31 shares in the last quarter. Horrell Capital Management Inc. grew its stake in Tesla by 75.6% in the fourth quarter. Horrell Capital Management Inc. now owns 79 shares of the electric vehicle producer\'s stock worth $32,000 after purchasing an additional 34 shares in the last quarter. GS Investments Inc. increased its holdings in Tesla by 193.3% in the fourth quarter. GS Investments Inc. now owns 88 shares of the electric vehicle producer\'s stock valued at $36,000 after buying an additional 58 shares during the last quarter. Navigoe LLC acquired a new stake in Tesla during the fourth quarter valued at approximately $37,000. Finally, CoreFirst Bank & Trust bought a new position in Tesla during the 4th quarter worth approximately $38,000. Institutional investors and hedge funds own 66.20% of the company\'s stock.\n\nTesla, Inc designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. The company operates in two segments, Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells automotive regulatory credits; and non-warranty after-sales vehicle, used vehicles, body shop and parts, supercharging, retail merchandise, and vehicle insurance services.\n\nThis instant news alert was generated by narrative science technology and financial data from MarketBeat in order to provide readers with the fastest and most accurate reporting. This story was reviewed by MarketBeat\'s editorial team prior to publication. Please send any questions or comments about this story to contact@marketbeat.com.\n\nBefore you consider Tesla, you\'ll want to hear this.\n\nMarketBeat keeps track of Wall Street\'s top-rated and best performing research analysts and the stocks they recommend to their clients on a daily basis. MarketBeat has identified the five stocks that top analysts are quietly whispering to their clients to buy now before the broader market catches on... and Tesla wasn\'t on the list.\n\nWhile Tesla currently has a "Hold" rating among analysts, top-rated analysts believe these five stocks are better buys.',
        source: {
          uri: "marketbeat.com",
          dataType: "news",
          title: "Market Beat",
        },
        authors: [],
        concepts: [
          {
            uri: "http://en.wikipedia.org/wiki/Tesla,_Inc.",
            type: "org",
            score: 5,
            label: {
              eng: "Tesla, Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Earnings_per_share",
            type: "wiki",
            score: 5,
            label: {
              eng: "Earnings per share",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Electric_vehicle",
            type: "wiki",
            score: 4,
            label: {
              eng: "Electric vehicle",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Moving_average",
            type: "wiki",
            score: 4,
            label: {
              eng: "Moving average",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Price–earnings_ratio",
            type: "wiki",
            score: 4,
            label: {
              eng: "Price–earnings ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Jefferies_Financial_Group",
            type: "org",
            score: 3,
            label: {
              eng: "Jefferies Financial Group",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Debt-to-equity_ratio",
            type: "wiki",
            score: 3,
            label: {
              eng: "Debt-to-equity ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Current_ratio",
            type: "wiki",
            score: 3,
            label: {
              eng: "Current ratio",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Stifel",
            type: "org",
            score: 3,
            label: {
              eng: "Stifel",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Barclays",
            type: "org",
            score: 3,
            label: {
              eng: "Barclays",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Chief_financial_officer",
            type: "wiki",
            score: 3,
            label: {
              eng: "Chief financial officer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Goldman_Sachs",
            type: "org",
            score: 3,
            label: {
              eng: "Goldman Sachs",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Beta_(finance)",
            type: "wiki",
            score: 2,
            label: {
              eng: "Beta (finance)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Return_on_equity",
            type: "wiki",
            score: 2,
            label: {
              eng: "Return on equity",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Fiscal_year",
            type: "wiki",
            score: 2,
            label: {
              eng: "Fiscal year",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Hedge_fund",
            type: "wiki",
            score: 2,
            label: {
              eng: "Hedge fund",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Market_capitalization",
            type: "wiki",
            score: 2,
            label: {
              eng: "Market capitalization",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/U.S._Securities_and_Exchange_Commission",
            type: "wiki",
            score: 2,
            label: {
              eng: "U.S. Securities and Exchange Commission",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Wall_Street",
            type: "wiki",
            score: 1,
            label: {
              eng: "Wall Street",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Institutional_investor",
            type: "wiki",
            score: 1,
            label: {
              eng: "Institutional investor",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Vehicle_insurance",
            type: "wiki",
            score: 1,
            label: {
              eng: "Vehicle insurance",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Stock",
            type: "wiki",
            score: 1,
            label: {
              eng: "Stock",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Automotive_industry",
            type: "wiki",
            score: 1,
            label: {
              eng: "Automotive industry",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/United_States",
            type: "loc",
            score: 1,
            label: {
              eng: "United States",
            },
            location: {
              type: "country",
              label: {
                eng: "United States",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/China",
            type: "loc",
            score: 1,
            label: {
              eng: "China",
            },
            location: {
              type: "country",
              label: {
                eng: "China",
              },
            },
          },
        ],
        categories: [
          {
            uri: "dmoz/Business/Investing",
            label: "dmoz/Business/Investing",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Investing/Stocks_and_Bonds",
            label: "dmoz/Business/Investing/Stocks and Bonds",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Financial_Services/Cash_Flow",
            label: "dmoz/Business/Financial Services/Cash Flow",
            wgt: 100,
          },
          {
            uri: "dmoz/Home/Personal_Finance/Investing",
            label: "dmoz/Home/Personal Finance/Investing",
            wgt: 100,
          },
          {
            uri: "news/Business",
            label: "news/Business",
            wgt: 99,
          },
        ],
        image:
          "https://www.marketbeat.com/images/marketbeat-logo-1200-1200.jpg?v=1",
        eventUri: null,
        location: null,
        shares: {},
        sentiment: 0.1843137254901961,
        wgt: 478256740,
        relevance: 1,
      },
      {
        uri: "8565502424",
        lang: "eng",
        isDuplicate: false,
        date: "2025-02-26",
        time: "09:02:41",
        dateTime: "2025-02-26T09:02:41Z",
        dateTimePub: "2025-02-26T09:02:01Z",
        dataType: "news",
        sim: 0.8196078538894653,
        url: "https://www.thestar.com.my/tech/tech-news/2025/02/26/uber-ceo-says-elon-musk-wants-to-go-alone-on-tesla-robotaxi-rollout",
        title:
          "Uber CEO says Elon Musk wants to go alone on Tesla robotaxi rollout",
        body: "Khosrowshahi at the FII Priority Summit on Feb 21, 2025 in Miami Beach, Florida. Khosrowshahi added that it would make 'a lot of economic sense' for Uber to be a platform for Tesla drivers. -- AFP\n\nUber Technologies Inc chief executive officer Dara Khosrowshahi said Elon Musk was not open to making Tesla Inc's planned robotaxis available on the ride-sharing platform, making Uber a future competitor.\n\n\"I've had conversations with him at this point,\" Khosrowshahi said Friday in an interview with Bloomberg TV's Manus Cranny at the FII conference in Miami. \"They want to build it alone, so to some extent in Austin, we and Waymo will be competing with Tesla when they launch,\" he said, referring to Alphabet Inc's autonomous-vehicle unit. \"Life is long, but we would love to partner with them.\"\n\nKhosrowshahi added that it would make \"a lot of economic sense\" for Uber to be a platform for Tesla drivers. \"What we bring is demand to the AV ecosystem when demand often is quite variable.\"\n\nA Tesla spokesperson did not respond to an emailed request for comment.\n\nUber executives have dedicated more time in their earnings calls and other presentations to elaborate on the company's AV strategy. Since 2023, it's struck more than a dozen manufacturer partnerships and has invested in multiple self-driving technology companies.\n\nSome Wall Street investors have been nervous about the future of Uber and rideshare peer Lyft Inc's business model, which currently relies on a large population of human drivers that are quickly matched with riders.\n\nThe launch of Tesla robotaxis and the broader rollout of Waymo rides could hurt Uber's ride volume growth and lower the commission rate it can make, Bloomberg Intelligence has said.\n\nWhile Uber will launch autonomous rides with Waymo in Austin next month and in Atlanta over the summer, Waymo also offers driverless rides through its own consumer app in other key markets, including San Francisco and, starting next year, Miami. - Bloomberg",
        source: {
          uri: "thestar.com.my",
          dataType: "news",
          title: "The Star ",
        },
        authors: [],
        concepts: [
          {
            uri: "http://en.wikipedia.org/wiki/Tesla,_Inc.",
            type: "org",
            score: 5,
            label: {
              eng: "Tesla, Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Dara_Khosrowshahi",
            type: "person",
            score: 5,
            label: {
              eng: "Dara Khosrowshahi",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Uber",
            type: "org",
            score: 5,
            label: {
              eng: "Uber",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Robotaxi",
            type: "wiki",
            score: 3,
            label: {
              eng: "Robotaxi",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Carpool",
            type: "wiki",
            score: 3,
            label: {
              eng: "Carpool",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Elon_Musk",
            type: "person",
            score: 3,
            label: {
              eng: "Elon Musk",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Chief_executive_officer",
            type: "wiki",
            score: 3,
            label: {
              eng: "Chief executive officer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Miami_Beach,_Florida",
            type: "loc",
            score: 3,
            label: {
              eng: "Miami Beach, Florida",
            },
            location: {
              type: "place",
              label: {
                eng: "Miami Beach, Florida",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Waymo",
            type: "org",
            score: 2,
            label: {
              eng: "Waymo",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Alphabet_Inc.",
            type: "org",
            score: 2,
            label: {
              eng: "Alphabet Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Bloomberg_L.P.",
            type: "org",
            score: 2,
            label: {
              eng: "Bloomberg L.P.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Austin,_Texas",
            type: "loc",
            score: 2,
            label: {
              eng: "Austin, Texas",
            },
            location: {
              type: "place",
              label: {
                eng: "Austin, Texas",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Miami",
            type: "loc",
            score: 2,
            label: {
              eng: "Miami",
            },
            location: {
              type: "place",
              label: {
                eng: "Miami",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Ridesharing_company",
            type: "wiki",
            score: 1,
            label: {
              eng: "Ridesharing company",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Self-driving_car",
            type: "wiki",
            score: 1,
            label: {
              eng: "Self-driving car",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Lyft",
            type: "org",
            score: 1,
            label: {
              eng: "Lyft",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Wall_Street",
            type: "wiki",
            score: 1,
            label: {
              eng: "Wall Street",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Mobile_app",
            type: "wiki",
            score: 1,
            label: {
              eng: "Mobile app",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Agence_France-Presse",
            type: "wiki",
            score: 1,
            label: {
              eng: "Agence France-Presse",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/San_Francisco",
            type: "loc",
            score: 1,
            label: {
              eng: "San Francisco",
            },
            location: {
              type: "place",
              label: {
                eng: "San Francisco",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Atlanta",
            type: "loc",
            score: 1,
            label: {
              eng: "Atlanta, Georgia",
            },
            location: {
              type: "place",
              label: {
                eng: "Atlanta, Georgia",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
        ],
        categories: [
          {
            uri: "dmoz/Society/Issues/Business",
            label: "dmoz/Society/Issues/Business",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Opportunities",
            label: "dmoz/Business/Opportunities",
            wgt: 100,
          },
          {
            uri: "dmoz/Business/Opportunities/Opposing_Views",
            label: "dmoz/Business/Opportunities/Opposing Views",
            wgt: 100,
          },
          {
            uri: "news/Technology",
            label: "news/Technology",
            wgt: 65,
          },
        ],
        image:
          "https://apicms.thestar.com.my/uploads/images/2025/02/26/3186483.JPG",
        eventUri: "eng-10369544",
        location: null,
        shares: {},
        sentiment: 0.08235294117647052,
        wgt: 478256561,
        relevance: 1,
      },
      {
        uri: "8565416200",
        lang: "eng",
        isDuplicate: false,
        date: "2025-02-26",
        time: "08:04:11",
        dateTime: "2025-02-26T08:04:11Z",
        dateTimePub: "2025-02-26T08:03:19Z",
        dataType: "news",
        sim: 0.6784313917160034,
        url: "https://www.thestar.com.my/tech/tech-news/2025/02/26/tesla-feels-the-wrath-of-anti-elon-musk-backlash",
        title: "Tesla feels the wrath of anti-Elon Musk backlash",
        body: "Demonstrators gather for a protest against Musk and Tesla on Feb 22, 2025 in Seattle, Washington. Pew Research found a majority of Americans view Musk unfavorably, while Quinnipiac University says a preponderance of voters think he has too much power to make decisions affecting the US. -- AFP\n\nTae Helton, a car aficionado who lives minutes from Tesla Inc's flagship California factory, bought one Tesla for the family fleet and nearly purchased a second one last year.\n\nAfter Elon Musk made gestures resembling a Nazi salute at an inauguration event for President Donald Trump last month, he wants nothing to do with the brand.\n\n\"The pride and the good feeling I had driving in it is gone for me,\" Helton said of the Model 3 he's driven only around 2,500 miles. The politically moderate 49-year-old plans to pay off his car loan early and trade in the sedan before year-end.\n\nHelton has company among Tesla customers and consumers. The EV maker's sales fell 45% across Europe in January, following its first annual decline in global deliveries in over a decade. The company is showing particular signs of strain in places where its chief executive officer is inserting himself in politics in ways that run counter to Tesla's stated mission and values.\n\nIn California, Tesla sales fell 12% last year as Musk attacked leaders of a state that played a pivotal role in the carmaker surviving its tumultuous early years and becoming one of the world's most valuable companies.\n\nIn Germany - where registrations plummeted 41% last year and 59% in January - the billionaire emphatically supports a far-right party that denies the harm of carbon dioxide emissions. And in the UK - now Europe's biggest electric-vehicle market - Musk has aligned with politicians who want net zero targets scrapped and have cast policies aimed at boosting EV adoption as a \"war on drivers\".\n\n\"Tesla's biggest challenge in 2025 isn't technology - it's perception,\" says Jacob Falkencrone, global head of investment strategy at Saxo, the Danish bank with more than €105bil (RM488.38bil) in client assets. \"Elon Musk's political baggage is now weighing on sales, brand loyalty and investor confidence.\"\n\nMusk's polarising behaviour is nothing new, nor are indications that many of his customers have soured on him. In 2023, Bloomberg News surveyed more than 5,000 Tesla owners, and sentiment on the CEO took the biggest plunge among all the topics consumers had been asked about four years earlier.\n\nBut the backlash against Musk has gone to another level early this year.\n\nAt Tesla's factory outside Berlin, activists projected footage of Musk's gesture onto the façade of the building in a stunt viewed millions of times on X, his platform formerly known as Twitter. Tesla showrooms have been vandalised in the Netherlands, Colorado, Oregon and Washington. Weekend protests have been staged at dozens of the company's stores across the US.\n\n\"I don't know if there's ever been a greater destruction of brand equity in this short amount of time,\" said Tom Price, a resident of Berkeley, California, who showed up to a demonstration in the city with a Don't Drive DOGE sign. \"Tesla has become a four-wheel billboard for the immolation of our democracy.\"\n\nMusk is polling poorly among Brits, Germans and Swedes, with a survey in the latter country also finding increasingly negative attitudes toward Tesla. Model Y registrations in Sweden fell 48% last month, while Model 3 sales dropped 31%.\n\nPew Research found a majority of Americans view Musk unfavorably, while Quinnipiac University says a preponderance of voters think he has too much power to make decisions affecting the US. A Republican strategist advocating for bipartisan EV adoption in the country found Musk is now more popular with people who drive gas cars than he is with those driving electric.\n\n\"I used to be adored by the left,\" Musk said during a joint interview with Trump by Fox News' Sean Hannity that aired last week. \"Less so these days.\"\n\nTesla management told investors last month to expect its vehicle business to return to growth this year, though they avoided offering specific figures. Three months earlier, Musk said he saw potential for a 20% to 30% sales jump.\n\nThere are reasons to be optimistic Tesla can sell more cars this year, despite the slow start. Some of its early-year sales weakness is tied to changing over production lines for its most popular vehicle, the Model Y, which has been redesigned. Updating all four of the factories assembling the sport utility vehicle will result in several weeks of lost output this quarter, chief financial officer Vaibhav Taneja said last month.\n\nTesla also has told investors that more affordable models are on track to go into production starting in the first half of this year, though they've offered little detail about the vehicles. While the carmaker's shares have fallen 37% from a record high reached in mid-December, they're still up 20% since the Nov 5 election.\n\nSome consumers won't be giving Tesla's new models a look. Eric Thurber, a San Francisco Bay area resident who bought a Model 3 in 2021, expected to keep his car for at least five or six years. After Inauguration Day, he decided to sell at a steep loss.\n\n\"I couldn't handle what Elon Musk was doing anymore,\" the 58-year-old said. Thurber had checked on the resale value of his car months earlier and was getting periodic updates indicating that it was depreciating precipitously. While he still owed about US$27,000 (RM119,629) on the Model 3, he wanted out when Carvana estimated it was worth roughly US$22,000 (RM97,476). He traded the car in for a BMW i4 electric sedan.\n\nMicah Barber, a college professor in Austin, where Musk moved Tesla's headquarters to in late 2021, currently drives a gas-burning Chevrolet Equinox SUV and plans to make the family's next vehicle an EV. While he's admired how much innovation Tesla brought to the auto industry, he's ruled out buying one of the company's cars because of Musk.\n\n\"He's become one of the most dangerous people in our country,\" Barber, 43, said of Musk at a protest staged this month at Tesla's showroom in the Texas capital.\n\nThe brands accumulating market share at Tesla's expense have varied by market. In California, Honda and Hyundai gained the most share of the state's EV market last year. In Germany, Volkswagen AG's VW, Seat and Skoda, and BMW AG's namesake brand registered the biggest increases in January sales.\n\nThe majority of Lucid Group Inc customers historically have owned Teslas, and the maker of the US$69,900 (RM309,728) Air sedan has seen increasing interest in the last several quarters, the company said in an emailed statement. The CEO of Polestar, the EV maker spun off from Volvo Car AB, told Bloomberg News last month that he'd directed salespeople to target disgruntled Tesla owners.\n\n\"Three or four years ago, you could say that it was kind of a one-horse race,\" BJ Birtwell, the CEO of Electrify Expo, which hosts EV festivals for consumers across the US, said of the market dynamics. \"Now, it's so hyper-competitive that most auto manufacturers have really strong offerings that are creating the type of competition for Tesla that they've never seen.\"\n\nHelton, the Model 3 owner who was keen to buy cars built near his home in the Bay area - including by friends working at Tesla's factory - made tentative plans to purchase another one of company's vehicles from the first test drive his family took last year. While he'd observed some \"red flags\" about Musk when he ordered the sedan in May, he wasn't inclined to hold it against the whole company.\n\nAfter Musk ratcheted up his political activities, the human resources professional grew reluctant to double-up on the Tesla brand. His family decided to lease a Hyundai Ioniq 5 instead.\n\n\"I always felt like if my vote didn't impact what I was wanting, the other way I can vote is through the vote of my wallet, whether it's Tesla or anything else,\" Helton said. \"I've been voting with my wallet lately.\" - Bloomberg",
        source: {
          uri: "thestar.com.my",
          dataType: "news",
          title: "The Star ",
        },
        authors: [],
        concepts: [
          {
            uri: "http://en.wikipedia.org/wiki/Tesla,_Inc.",
            type: "org",
            score: 5,
            label: {
              eng: "Tesla, Inc.",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Electric_vehicle",
            type: "wiki",
            score: 5,
            label: {
              eng: "Electric vehicle",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Elon_Musk",
            type: "person",
            score: 5,
            label: {
              eng: "Elon Musk",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/California",
            type: "loc",
            score: 5,
            label: {
              eng: "California",
            },
            location: {
              type: "place",
              label: {
                eng: "California",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Tesla_Model_3",
            type: "wiki",
            score: 4,
            label: {
              eng: "Tesla Model 3",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Quinnipiac_University",
            type: "org",
            score: 4,
            label: {
              eng: "Quinnipiac University",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Pew_Research_Center",
            type: "wiki",
            score: 4,
            label: {
              eng: "Pew Research Center",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Donald_Trump",
            type: "person",
            score: 4,
            label: {
              eng: "Donald Trump",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Chief_executive_officer",
            type: "wiki",
            score: 4,
            label: {
              eng: "Chief executive officer",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Germany",
            type: "loc",
            score: 4,
            label: {
              eng: "Germany",
            },
            location: {
              type: "country",
              label: {
                eng: "Germany",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Greenhouse_gas_emissions",
            type: "wiki",
            score: 3,
            label: {
              eng: "Greenhouse gas emissions",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Tesla_Model_Y",
            type: "wiki",
            score: 3,
            label: {
              eng: "Tesla Model Y",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Carbon_neutrality",
            type: "wiki",
            score: 3,
            label: {
              eng: "Carbon neutrality",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Nazi_salute",
            type: "wiki",
            score: 3,
            label: {
              eng: "Nazi salute",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Flagship",
            type: "wiki",
            score: 3,
            label: {
              eng: "Flagship",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Sedan_(automobile)",
            type: "wiki",
            score: 3,
            label: {
              eng: "Sedan (automobile)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Far-right_politics",
            type: "wiki",
            score: 3,
            label: {
              eng: "Far-right politics",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Europe",
            type: "loc",
            score: 3,
            label: {
              eng: "Europe",
            },
            location: null,
          },
          {
            uri: "http://en.wikipedia.org/wiki/Seattle",
            type: "loc",
            score: 3,
            label: {
              eng: "Seattle",
            },
            location: {
              type: "place",
              label: {
                eng: "Seattle",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Sweden",
            type: "loc",
            score: 3,
            label: {
              eng: "Sweden",
            },
            location: {
              type: "country",
              label: {
                eng: "Sweden",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/United_Kingdom",
            type: "loc",
            score: 3,
            label: {
              eng: "United Kingdom",
            },
            location: {
              type: "country",
              label: {
                eng: "United Kingdom",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Denmark",
            type: "loc",
            score: 3,
            label: {
              eng: "Denmark",
            },
            location: {
              type: "country",
              label: {
                eng: "Denmark",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/SUV",
            type: "wiki",
            score: 2,
            label: {
              eng: "SUV",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Fox_News",
            type: "org",
            score: 2,
            label: {
              eng: "Fox News",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Tom_Price_(American_politician)",
            type: "person",
            score: 2,
            label: {
              eng: "Tom Price (American politician)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Brand_loyalty",
            type: "wiki",
            score: 2,
            label: {
              eng: "Brand loyalty",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Billboard",
            type: "wiki",
            score: 2,
            label: {
              eng: "Billboard",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Bloomberg_News",
            type: "org",
            score: 2,
            label: {
              eng: "Bloomberg News",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Sean_Hannity",
            type: "person",
            score: 2,
            label: {
              eng: "Sean Hannity",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Equity_(finance)",
            type: "wiki",
            score: 2,
            label: {
              eng: "Equity (finance)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Democracy",
            type: "wiki",
            score: 2,
            label: {
              eng: "Democracy",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Republican_Party_(United_States)",
            type: "org",
            score: 2,
            label: {
              eng: "Republican Party (United States)",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/United_States_dollar",
            type: "wiki",
            score: 2,
            label: {
              eng: "United States dollar",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Twitter",
            type: "org",
            score: 2,
            label: {
              eng: "Twitter",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Euro",
            type: "wiki",
            score: 2,
            label: {
              eng: "Euro",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Washington_(state)",
            type: "loc",
            score: 2,
            label: {
              eng: "Washington (state)",
            },
            location: {
              type: "place",
              label: {
                eng: "Washington (state)",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Oregon",
            type: "loc",
            score: 2,
            label: {
              eng: "Oregon",
            },
            location: {
              type: "place",
              label: {
                eng: "Oregon",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Colorado",
            type: "loc",
            score: 2,
            label: {
              eng: "Colorado",
            },
            location: {
              type: "place",
              label: {
                eng: "Colorado",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Berkeley,_California",
            type: "loc",
            score: 2,
            label: {
              eng: "Berkeley, California",
            },
            location: {
              type: "place",
              label: {
                eng: "Berkeley, California",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Berlin",
            type: "loc",
            score: 2,
            label: {
              eng: "Berlin",
            },
            location: {
              type: "place",
              label: {
                eng: "Berlin",
              },
              country: {
                type: "country",
                label: {
                  eng: "Germany",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Netherlands",
            type: "loc",
            score: 2,
            label: {
              eng: "Netherlands",
            },
            location: {
              type: "country",
              label: {
                eng: "Netherlands",
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Hyundai_Ioniq_5",
            type: "wiki",
            score: 1,
            label: {
              eng: "Hyundai Ioniq 5",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/BMW_i4",
            type: "wiki",
            score: 1,
            label: {
              eng: "BMW i4",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Hyundai_Motor_Company",
            type: "org",
            score: 1,
            label: {
              eng: "Hyundai Motor Company",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Škoda_Auto",
            type: "org",
            score: 1,
            label: {
              eng: "Škoda Auto",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/San_Francisco_Bay_Area",
            type: "loc",
            score: 1,
            label: {
              eng: "San Francisco Bay Area",
            },
            location: null,
          },
          {
            uri: "http://en.wikipedia.org/wiki/Volkswagen_Group",
            type: "org",
            score: 1,
            label: {
              eng: "Volkswagen Group",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Honda",
            type: "org",
            score: 1,
            label: {
              eng: "Honda",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Volvo",
            type: "org",
            score: 1,
            label: {
              eng: "Volvo",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/BMW",
            type: "org",
            score: 1,
            label: {
              eng: "BMW",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Human_resources",
            type: "org",
            score: 1,
            label: {
              eng: "Human resources",
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Texas",
            type: "loc",
            score: 1,
            label: {
              eng: "Texas",
            },
            location: {
              type: "place",
              label: {
                eng: "Texas",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
          {
            uri: "http://en.wikipedia.org/wiki/Austin,_Texas",
            type: "loc",
            score: 1,
            label: {
              eng: "Austin, Texas",
            },
            location: {
              type: "place",
              label: {
                eng: "Austin, Texas",
              },
              country: {
                type: "country",
                label: {
                  eng: "United States",
                },
              },
            },
          },
        ],
        categories: [
          {
            uri: "dmoz/Business/Automotive",
            label: "dmoz/Business/Automotive",
            wgt: 100,
          },
          {
            uri: "dmoz/Shopping/Vehicles",
            label: "dmoz/Shopping/Vehicles",
            wgt: 100,
          },
          {
            uri: "dmoz/Shopping/Vehicles/Autos",
            label: "dmoz/Shopping/Vehicles/Autos",
            wgt: 100,
          },
          {
            uri: "dmoz/Shopping/Vehicles/Parts_and_Accessories",
            label: "dmoz/Shopping/Vehicles/Parts and Accessories",
            wgt: 100,
          },
          {
            uri: "news/Business",
            label: "news/Business",
            wgt: 87,
          },
        ],
        image:
          "https://apicms.thestar.com.my/uploads/images/2025/02/26/3186397.jpg",
        eventUri: "eng-10367616",
        location: null,
        shares: {},
        sentiment: 0.1450980392156862,
        wgt: 478253051,
        relevance: 1,
      },
    ],
    totalResults: 2756,
    page: 1,
    count: 10,
    pages: 276,
  },
};

const clientMock = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const transformedList = transformer(mockData);
      resolve(transformedList);
    }, 1500); // Simulating network delay
  });
};

export default clientMock;
