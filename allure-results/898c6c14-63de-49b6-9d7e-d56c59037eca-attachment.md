# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\AmazonE2E.spec.ts >> Amazon E2E >> Complete E2E Purchase Flow
- Location: tests\regression\AmazonE2E.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#twotabsearchtextbox')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#twotabsearchtextbox')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation "Shortcuts menu" [ref=e3]:
    - heading "Skip to" [level=2] [ref=e4]
    - list "Skip to" [ref=e5]:
      - listitem [ref=e6]:
        - link "main content" [ref=e7] [cursor=pointer]:
          - /url: "#skippedLink"
          - text: Main content
    - separator [ref=e8]
    - heading "Keyboard shortcuts" [level=2] [ref=e9]
    - list "Keyboard shortcuts" [ref=e10]:
      - listitem [ref=e11]:
        - link "Search, alt, forward slash" [ref=e12] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e13]:
            - generic [ref=e14]: Search
            - generic [ref=e15]:
              - generic [ref=e16]: alt
              - generic [ref=e17]: +
              - generic [ref=e18]: /
      - listitem [ref=e19]:
        - link "Cart, shift, alt, c" [ref=e20] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e21]:
            - generic [ref=e22]: Cart
            - generic [ref=e23]:
              - generic [ref=e24]: shift
              - generic [ref=e25]: +
              - generic [ref=e26]: alt
              - generic [ref=e27]: +
              - generic [ref=e28]: C
      - listitem [ref=e29]:
        - link "Home, shift, alt, h" [ref=e30] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e31]:
            - generic [ref=e32]: Home
            - generic [ref=e33]:
              - generic [ref=e34]: shift
              - generic [ref=e35]: +
              - generic [ref=e36]: alt
              - generic [ref=e37]: +
              - generic [ref=e38]: H
      - listitem [ref=e39]:
        - link "Your orders, shift, alt, o" [ref=e40] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e41]:
            - generic [ref=e42]: Orders
            - generic [ref=e43]:
              - generic [ref=e44]: shift
              - generic [ref=e45]: +
              - generic [ref=e46]: alt
              - generic [ref=e47]: +
              - generic [ref=e48]: O
      - listitem [ref=e49]:
        - button "Show/hide shortcuts, shift, alt, z" [ref=e50] [cursor=pointer]:
          - generic [ref=e51]:
            - generic [ref=e52]: Show/Hide shortcuts
            - generic [ref=e53]:
              - generic [ref=e54]: shift
              - generic [ref=e55]: +
              - generic [ref=e56]: alt
              - generic [ref=e57]: +
              - generic [ref=e58]: Z
    - generic [ref=e64]: To move between items, use your keyboard's up or down arrows.
  - banner [ref=e65]:
    - navigation "Primary" [ref=e66]:
      - generic [ref=e67]:
        - generic [ref=e68]:
          - link "Amazon.in" [ref=e70] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Bengaluru 562130 Update location" [ref=e73] [cursor=pointer]:
            - generic [ref=e75]:
              - generic [ref=e76]: Delivering to Bengaluru 562130
              - generic [ref=e77]: Update location
        - search [ref=e80]:
          - generic [ref=e83]:
            - generic [ref=e85]: All
            - combobox "Select the department you want to search in" [ref=e87] [cursor=pointer]:
              - option "All Categories" [selected]
              - option "Alexa Skills"
              - option "Amazon Devices"
              - option "Amazon Fashion"
              - option "Amazon Fresh"
              - option "Amazon Pharmacy"
              - option "Appliances"
              - option "Apps & Games"
              - option "Audible Audiobooks"
              - option "Baby"
              - option "Beauty"
              - option "Books"
              - option "Car & Motorbike"
              - option "Clothing & Accessories"
              - option "Collectibles"
              - option "Computers & Accessories"
              - option "Deals"
              - option "Electronics"
              - option "Furniture"
              - option "Garden & Outdoors"
              - option "Gift Cards"
              - option "Grocery & Gourmet Foods"
              - option "Health & Personal Care"
              - option "Home & Kitchen"
              - option "Industrial & Scientific"
              - option "Jewellery"
              - option "Kindle Store"
              - option "Luggage & Bags"
              - option "Luxury Beauty"
              - option "Movies & TV Shows"
              - option "MP3 Music"
              - option "Music"
              - option "Musical Instruments"
              - option "Office Products"
              - option "Pet Supplies"
              - option "Prime Video"
              - option "Shoes & Handbags"
              - option "Software"
              - option "Sports, Fitness & Outdoors"
              - option "Subscribe & Save"
              - option "Tools & Home Improvement"
              - option "Toys & Games"
              - option "Under ₹500"
              - option "Video Games"
              - option "Watches"
          - searchbox "Search Amazon.in" [ref=e90]
          - generic "Go" [ref=e93] [cursor=pointer]:
            - button "Go" [ref=e94]
        - generic [ref=e96]:
          - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=e98] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
            - generic [ref=e101]:
              - img "India" [ref=e102]
              - generic [ref=e103]: EN
          - generic [ref=e104]:
            - link "Hello, sign in Account & Lists" [ref=e105] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
              - generic [ref=e107]: Hello, sign in
              - generic [ref=e108]: Account & Lists
            - button "Expand Account and Lists" [ref=e109] [cursor=pointer]
          - link "Returns & Orders" [ref=e110] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=e111]: Returns
            - generic [ref=e112]: "& Orders"
          - link "0 items in cart" [ref=e113] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [ref=e115]: "0"
            - generic [ref=e118]: Cart
      - generic [ref=e119]:
        - button "Open All Categories Menu" [ref=e121] [cursor=pointer]:
          - generic [ref=e123]: All
        - list [ref=e127]:
          - listitem [ref=e128]:
            - generic [ref=e129]:
              - link "Fresh" [ref=e130] [cursor=pointer]:
                - /url: /fresh?ref_=nav_cs_grocery
              - button "Fresh Details" [ref=e131] [cursor=pointer]
          - listitem [ref=e132]:
            - link "MX Player" [ref=e134] [cursor=pointer]:
              - /url: /minitv?ref_=nav_avod_desktop_topnav
          - listitem [ref=e135]:
            - link "Sell" [ref=e137] [cursor=pointer]:
              - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
          - listitem [ref=e138]:
            - link "Bestsellers" [ref=e140] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=e141]:
            - link "Mobiles" [ref=e143] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=e144]:
            - link "Today's Deals" [ref=e146] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=e147]:
            - link "New Releases" [ref=e149] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=e150]:
            - link "Customer Service" [ref=e152] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=e153]:
            - generic [ref=e154]:
              - link "Prime" [ref=e155] [cursor=pointer]:
                - /url: /prime?ref_=nav_cs_primelink_nonmember
              - button "Prime Details" [ref=e156] [cursor=pointer]
          - listitem [ref=e157]:
            - link "Amazon Pay" [ref=e159] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=e160]:
            - link "Electronics" [ref=e162] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=e163]:
            - link "Fashion" [ref=e165] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=e166]:
            - link "Home & Kitchen" [ref=e168] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=e169]:
            - link "Computers" [ref=e171] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=e172]:
            - link "Toys & Games" [ref=e174] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=e175]:
            - link "Books" [ref=e177] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=e178]:
            - link "Gift Cards" [ref=e180] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=e181]:
            - link "Beauty & Personal Care" [ref=e183] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=e184]:
            - link "Car & Motorbike" [ref=e186] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=e187]:
            - link "Home Improvement" [ref=e189] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=e190]:
            - link "Custom Products" [ref=e192] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=e193]:
            - link "Health, Household & Personal Care" [ref=e195] [cursor=pointer]:
              - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
          - listitem [ref=e196]:
            - link "Sports, Fitness & Outdoors" [ref=e198] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=e199]:
            - link "Grocery & Gourmet Foods" [ref=e201] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=e202]:
            - link "Pet Supplies" [ref=e204] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=e205]:
            - link "Video Games" [ref=e207] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=e208]:
            - link "Baby" [ref=e210] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=e211]:
            - link "AmazonBasics" [ref=e213] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=e214]:
            - link "Audible" [ref=e216] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=e217]:
            - link "Subscribe & Save" [ref=e219] [cursor=pointer]:
              - /url: /auto-deliveries/landing?ref_=nav_cs_sns
          - listitem [ref=e220]:
            - link "Kindle eBooks" [ref=e222] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=e223]:
            - link "Flights" [ref=e225] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
        - link "Jan26_Event" [ref=e229] [cursor=pointer]:
          - /url: /events/greatsummersale/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=28d55bdd-f1be-40ce-b35d-71e62178e3df&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=QS781B1KVYCNH8MPB65N
          - img "Jan26_Event" [ref=e230]
  - main [ref=e232]:
    - banner [ref=e234]:
      - region "Featured content" [ref=e235]:
        - list [ref=e240]:
          - listitem [ref=e241]:
            - link "Great Summer Sale" [ref=e244] [cursor=pointer]:
              - /url: /events/greatsummersale/?_encoding=UTF8&ref_=DRQC1&pd_rd_w=Pk6vY&content-id=amzn1.sym.9dbcf7bf-e19b-4a06-905c-a5ecc7c07859&pf_rd_p=9dbcf7bf-e19b-4a06-905c-a5ecc7c07859&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=hkc9C&pd_rd_r=0837f375-5f67-4e7f-83d9-73a6d7ee0c38
              - img "Great Summer Sale" [ref=e245]
    - generic [ref=e246]:
      - generic [ref=e247]:
        - generic [ref=e249]:
          - heading "Shop by brand | Deals on top smartphones" [level=2] [ref=e251]
          - generic [ref=e252]:
            - generic [ref=e253]:
              - link "Samsung | Starting ₹9,499" [ref=e255] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=electronics&rh=n%3A976419031%2Cn%3A1389401031%2Cn%3A1389432031%2Cn%3A1805560031%2Cp_123%3A46655&dc=&ds=v1%3AIbj4z1dC8qHJ0zoNJaZ3kdzywD48ugXRyOkUNzOcuAU&qid=1739963664&rnid=1389432031&ref=tile1_SSG&pd_rd_w=qY4zY&content-id=amzn1.sym.be85b8e2-2c82-4f64-8061-893ad8c7cd07&pf_rd_p=be85b8e2-2c82-4f64-8061-893ad8c7cd07&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Samsung | Starting ₹9,499" [ref=e257]
                - generic [ref=e259]: Samsung | Starting ₹9,499
              - link "Apple| Starting ₹1,19,900" [ref=e261] [cursor=pointer]:
                - /url: /l/78382736031/?_encoding=UTF8&pd_rd_w=qY4zY&content-id=amzn1.sym.be85b8e2-2c82-4f64-8061-893ad8c7cd07&pf_rd_p=be85b8e2-2c82-4f64-8061-893ad8c7cd07&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Apple| Starting ₹1,19,900" [ref=e263]
                - generic [ref=e265]: Apple| Starting ₹1,19,900
            - generic [ref=e266]:
              - link "OnePlus | Starting ₹18,999*" [ref=e268] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=electronics&rh=n%3A1805560031%2Cp_n_condition-type%3A8609960031%2Cp_123%3A253649&s=price-asc-rank&dc=&qid=1739964310&rnid=91049095031&ref=sr_nr_p_123_2&ds=v1%3AzjU6O6w6gZHVkDi3pNIDMFv%2Fei3sFTFgJLbuudTDG8A&ref_=tile4_OP&pd_rd_w=qY4zY&content-id=amzn1.sym.be85b8e2-2c82-4f64-8061-893ad8c7cd07&pf_rd_p=be85b8e2-2c82-4f64-8061-893ad8c7cd07&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18
                - img "OnePlus | Starting ₹18,999*" [ref=e270]
                - generic [ref=e272]: OnePlus | Starting ₹18,999*
              - link "iQOO | Starting ₹13,499" [ref=e274] [cursor=pointer]:
                - /url: https://www.amazon.in/s/?_encoding=UTF8&i=electronics&rh=n%3A1805560031%2Cp_123%3A646111&s=popularity-rank&dc=&qid=1743070140&rnid=91049095031&ref=sr_nr_p_123_1&ds=v1%3ADKRWt94hPeczqBqRNH5dejat6zraEeeu%2FQ109q%2Bd65A&ref_=tile3_iQOO&pd_rd_w=qY4zY&content-id=amzn1.sym.be85b8e2-2c82-4f64-8061-893ad8c7cd07&pf_rd_p=be85b8e2-2c82-4f64-8061-893ad8c7cd07&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18
                - img "iQOO | Starting ₹13,499" [ref=e276]
                - generic [ref=e278]: iQOO | Starting ₹13,499
          - link "Shop by brand | Deals on top smartphones - See all offers" [ref=e280] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&node=1389401031&ref_=tile5_seeallCLP&pd_rd_w=qY4zY&content-id=amzn1.sym.be85b8e2-2c82-4f64-8061-893ad8c7cd07&pf_rd_p=be85b8e2-2c82-4f64-8061-893ad8c7cd07&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18
            - generic [ref=e281]:
              - generic [ref=e282]: See all offers
              - generic [ref=e283]: See all offers
        - generic [ref=e285]:
          - heading "Shop by price | Deals on top smartphones" [level=2] [ref=e287]
          - generic [ref=e288]:
            - generic [ref=e289]:
              - link "Budget | Starting ₹8,999" [ref=e291] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&rh=n%3A1805560031%2Cp_36%3A1318505031&dc=&qid=1778153592&rnid=1318502031&ref=sr_nr_p_36_2&pd_rd_w=ntkeQ&content-id=amzn1.sym.634eed32-fe6f-4213-8c41-e08d27026738&pf_rd_p=634eed32-fe6f-4213-8c41-e08d27026738&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Budget | Starting ₹8,999" [ref=e293]
                - generic [ref=e295]: Budget | Starting ₹8,999
              - link "Mid-range | Starting ₹10,499" [ref=e297] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=electronics&rh=n%3A1805560031%2Cp_36%3A1000000-2500000&dc=&qid=1778154074&rnid=1318502031&ref=sr_nr_p_36_0_0&pd_rd_w=ntkeQ&content-id=amzn1.sym.634eed32-fe6f-4213-8c41-e08d27026738&pf_rd_p=634eed32-fe6f-4213-8c41-e08d27026738&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Mid-range | Starting ₹10,499" [ref=e299]
                - generic [ref=e301]: Mid-range | Starting ₹10,499
            - generic [ref=e302]:
              - link "Premium | Starting ₹25,499" [ref=e304] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=electronics&rh=n%3A1805560031&dc=&qid=1778154122&rnid=1318502031&ref=sr_nr_p_36_0_0&low-price=25000&high-price=40000&pd_rd_w=ntkeQ&content-id=amzn1.sym.634eed32-fe6f-4213-8c41-e08d27026738&pf_rd_p=634eed32-fe6f-4213-8c41-e08d27026738&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Premium | Starting ₹25,499" [ref=e306]
                - generic [ref=e308]: Premium | Starting ₹25,499
              - link "Ultra Premium | Starting ₹42,999" [ref=e310] [cursor=pointer]:
                - /url: s/?_encoding=UTF8&i=electronics&rh=n%3A1805560031&dc=&qid=1778154655&rnid=1318502031&ref=sr_nr_p_36_0_0&low-price=40000&high-price=&pd_rd_w=ntkeQ&content-id=amzn1.sym.634eed32-fe6f-4213-8c41-e08d27026738&pf_rd_p=634eed32-fe6f-4213-8c41-e08d27026738&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Ultra Premium | Starting ₹42,999" [ref=e312]
                - generic [ref=e314]: Ultra Premium | Starting ₹42,999
          - link "Shop by price | Deals on top smartphones - See all offers" [ref=e316] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&node=1389401031&ref_=tile5_seeallCLP&pd_rd_w=ntkeQ&content-id=amzn1.sym.634eed32-fe6f-4213-8c41-e08d27026738&pf_rd_p=634eed32-fe6f-4213-8c41-e08d27026738&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18
            - generic [ref=e317]:
              - generic [ref=e318]: See all offers
              - generic [ref=e319]: See all offers
        - generic [ref=e321]:
          - heading "Up to 80% off | Home, kitchen & more" [level=2] [ref=e323]
          - generic [ref=e324]:
            - generic [ref=e325]:
              - link "Kitchen essentails" [ref=e327] [cursor=pointer]:
                - /url: https://www.amazon.in/b/?_encoding=UTF8&node=218494266031&pd_rd_w=0BaYD&content-id=amzn1.sym.2bda8594-4b4e-42de-aeff-ec9b5be5444c&pf_rd_p=2bda8594-4b4e-42de-aeff-ec9b5be5444c&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Kitchen essentails" [ref=e329]
                - generic [ref=e331]: Kitchen essentials
              - link "Home decor" [ref=e333] [cursor=pointer]:
                - /url: https://www.amazon.in/b/?_encoding=UTF8&node=218425970031&pd_rd_w=0BaYD&content-id=amzn1.sym.2bda8594-4b4e-42de-aeff-ec9b5be5444c&pf_rd_p=2bda8594-4b4e-42de-aeff-ec9b5be5444c&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Home decor" [ref=e335]
                - generic [ref=e337]: Home decor
            - generic [ref=e338]:
              - link "Furniture" [ref=e340] [cursor=pointer]:
                - /url: https://www.amazon.in/l/218430356031/?_encoding=UTF8&pd_rd_w=0BaYD&content-id=amzn1.sym.2bda8594-4b4e-42de-aeff-ec9b5be5444c&pf_rd_p=2bda8594-4b4e-42de-aeff-ec9b5be5444c&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Furniture" [ref=e342]
                - generic [ref=e344]: Furniture
              - link "Home improvement" [ref=e346] [cursor=pointer]:
                - /url: https://www.amazon.in/l/217813730031/?_encoding=UTF8&pd_rd_w=0BaYD&content-id=amzn1.sym.2bda8594-4b4e-42de-aeff-ec9b5be5444c&pf_rd_p=2bda8594-4b4e-42de-aeff-ec9b5be5444c&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Home improvement" [ref=e348]
                - generic [ref=e350]: Home improvement
          - link "Up to 80% off | Home, kitchen & more - See all deals" [ref=e352] [cursor=pointer]:
            - /url: /l/217277038031/?_encoding=UTF8&pd_rd_w=0BaYD&content-id=amzn1.sym.2bda8594-4b4e-42de-aeff-ec9b5be5444c&pf_rd_p=2bda8594-4b4e-42de-aeff-ec9b5be5444c&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
            - generic [ref=e353]:
              - generic [ref=e354]: See all deals
              - generic [ref=e355]: See all deals
        - generic [ref=e357]:
          - heading "Up to 45% off | Echo with Alexa and Fire TV" [level=2] [ref=e359]
          - generic [ref=e360]:
            - generic [ref=e361]:
              - link "Echo Show 11" [ref=e363] [cursor=pointer]:
                - /url: https://www.amazon.in/dp/B0DYBZF1LL/?_encoding=UTF8&pd_rd_w=tzrZP&content-id=amzn1.sym.2ac91e07-bd66-4fa7-a9ad-65a2e2c69681&pf_rd_p=2ac91e07-bd66-4fa7-a9ad-65a2e2c69681&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Echo Show 11" [ref=e365]
                - generic [ref=e367]: Echo Show 11
              - link "Fire TV Stick HD" [ref=e369] [cursor=pointer]:
                - /url: https://www.amazon.in/dp/B0CQN2BHW8/?_encoding=UTF8&pd_rd_w=tzrZP&content-id=amzn1.sym.2ac91e07-bd66-4fa7-a9ad-65a2e2c69681&pf_rd_p=2ac91e07-bd66-4fa7-a9ad-65a2e2c69681&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Fire TV Stick HD" [ref=e371]
                - generic [ref=e373]: Fire TV Stick HD
            - generic [ref=e374]:
              - link "Echo Pop" [ref=e376] [cursor=pointer]:
                - /url: https://www.amazon.in/dp/B09ZXD1CX2/?_encoding=UTF8&pd_rd_w=tzrZP&content-id=amzn1.sym.2ac91e07-bd66-4fa7-a9ad-65a2e2c69681&pf_rd_p=2ac91e07-bd66-4fa7-a9ad-65a2e2c69681&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Echo Pop" [ref=e378]
                - generic [ref=e380]: Echo Pop
              - link "Echo 4th Gen" [ref=e382] [cursor=pointer]:
                - /url: https://www.amazon.in/b/?_encoding=UTF8&node=B085FY9NK8&pd_rd_w=tzrZP&content-id=amzn1.sym.2ac91e07-bd66-4fa7-a9ad-65a2e2c69681&pf_rd_p=2ac91e07-bd66-4fa7-a9ad-65a2e2c69681&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Echo 4th Gen" [ref=e384]
                - generic [ref=e386]: Echo 4th Gen
          - link "Up to 45% off | Echo with Alexa and Fire TV - See all deals" [ref=e388] [cursor=pointer]:
            - /url: /l/21501032031/?_encoding=UTF8&pd_rd_w=tzrZP&content-id=amzn1.sym.2ac91e07-bd66-4fa7-a9ad-65a2e2c69681&pf_rd_p=2ac91e07-bd66-4fa7-a9ad-65a2e2c69681&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
            - generic [ref=e389]:
              - generic [ref=e390]: See all deals
              - generic [ref=e391]: See all deals
        - separator [ref=e392]
        - generic [ref=e394]:
          - heading "Up to 65% off | Offers on home appliances" [level=2] [ref=e396]
          - generic [ref=e397]:
            - generic [ref=e398]:
              - link "Washing machines" [ref=e400] [cursor=pointer]:
                - /url: https://www.amazon.in/l/1380369031/?_encoding=UTF8&pd_rd_w=s1E9Z&content-id=amzn1.sym.5707f6f0-7014-4a6e-8e06-964b7b8fb2c1&pf_rd_p=5707f6f0-7014-4a6e-8e06-964b7b8fb2c1&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Washing machines" [ref=e402]
                - generic [ref=e404]: Washing machines
              - link "Refrigerators" [ref=e406] [cursor=pointer]:
                - /url: https://www.amazon.in/l/1380365031/?_encoding=UTF8&pd_rd_w=s1E9Z&content-id=amzn1.sym.5707f6f0-7014-4a6e-8e06-964b7b8fb2c1&pf_rd_p=5707f6f0-7014-4a6e-8e06-964b7b8fb2c1&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Refrigerators" [ref=e408]
                - generic [ref=e410]: Refrigerators
            - generic [ref=e411]:
              - link "Air conditioners" [ref=e413] [cursor=pointer]:
                - /url: https://www.amazon.in/L/3474656031/?_encoding=UTF8&pd_rd_w=s1E9Z&content-id=amzn1.sym.5707f6f0-7014-4a6e-8e06-964b7b8fb2c1&pf_rd_p=5707f6f0-7014-4a6e-8e06-964b7b8fb2c1&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Air conditioners" [ref=e415]
                - generic [ref=e417]: Air conditioners
              - link "Chimneys" [ref=e419] [cursor=pointer]:
                - /url: https://www.amazon.in/l/65085351031/?_encoding=UTF8&pd_rd_w=s1E9Z&content-id=amzn1.sym.5707f6f0-7014-4a6e-8e06-964b7b8fb2c1&pf_rd_p=5707f6f0-7014-4a6e-8e06-964b7b8fb2c1&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Chimneys" [ref=e421]
                - generic [ref=e423]: Chimneys
          - link "Up to 65% off | Offers on home appliances - See all deals" [ref=e425] [cursor=pointer]:
            - /url: https://www.amazon.in/l/1380263031/?_encoding=UTF8&pd_rd_w=s1E9Z&content-id=amzn1.sym.5707f6f0-7014-4a6e-8e06-964b7b8fb2c1&pf_rd_p=5707f6f0-7014-4a6e-8e06-964b7b8fb2c1&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
            - generic [ref=e426]:
              - generic [ref=e427]: See all deals
              - generic [ref=e428]: See all deals
        - generic [ref=e430]:
          - heading "Up to 60% off | Daily needs" [level=2] [ref=e432]
          - generic [ref=e433]:
            - generic [ref=e434]:
              - link "Household & personal care" [ref=e436] [cursor=pointer]:
                - /url: /b/?_encoding=UTF8&ie=UTF8&node=1350384031&pd_rd_w=uhuc0&content-id=amzn1.sym.3253e5ff-abe3-4e97-b76b-3b3804d23531&pf_rd_p=3253e5ff-abe3-4e97-b76b-3b3804d23531&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Household & personal care" [ref=e438]
                - generic [ref=e440]: Household & personal care
              - link "Food & beverages" [ref=e442] [cursor=pointer]:
                - /url: /b/?_encoding=UTF8&ie=UTF8&node=2454178031&pd_rd_w=uhuc0&content-id=amzn1.sym.3253e5ff-abe3-4e97-b76b-3b3804d23531&pf_rd_p=3253e5ff-abe3-4e97-b76b-3b3804d23531&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Food & beverages" [ref=e444]
                - generic [ref=e446]: Food & beverages
            - generic [ref=e447]:
              - link "Baby care" [ref=e449] [cursor=pointer]:
                - /url: /b/?_encoding=UTF8&ie=UTF8&node=1571274031&pd_rd_w=uhuc0&content-id=amzn1.sym.3253e5ff-abe3-4e97-b76b-3b3804d23531&pf_rd_p=3253e5ff-abe3-4e97-b76b-3b3804d23531&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Baby care" [ref=e451]
                - generic [ref=e453]: Baby care
              - link "Pet care" [ref=e455] [cursor=pointer]:
                - /url: /b/?_encoding=UTF8&node=2454181031&pd_rd_w=uhuc0&content-id=amzn1.sym.3253e5ff-abe3-4e97-b76b-3b3804d23531&pf_rd_p=3253e5ff-abe3-4e97-b76b-3b3804d23531&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
                - img "Pet care" [ref=e457]
                - generic [ref=e459]: Pet care
          - link "Up to 60% off | Daily needs - See all offers" [ref=e461] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&ie=UTF8&node=6802110031&pd_rd_w=uhuc0&content-id=amzn1.sym.3253e5ff-abe3-4e97-b76b-3b3804d23531&pf_rd_p=3253e5ff-abe3-4e97-b76b-3b3804d23531&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
            - generic [ref=e462]:
              - generic [ref=e463]: See all offers
              - generic [ref=e464]: See all offers
        - generic [ref=e466]:
          - heading "Up to 75% off | Deals on headphones" [level=2] [ref=e468]:
            - generic [ref=e469]:
              - generic [ref=e470]: Up to 75% off | Deals on headphones
              - generic [ref=e471]: Up to 75% off | Deals on headphones
          - generic [ref=e473]:
            - link "Boat Rockerz 113, 40H Battery, Dual Pair, Fast Charge, ENx Tech, Stream Ad Free Music via App Support, Magnetic Buds, Bluetooth Neckband, Wireless with Mic in Ear Earphones (Active Black)" [ref=e475] [cursor=pointer]:
              - /url: /boAt-Rockerz-Magnetic-Bluetooth-Earphones/dp/B0F7Y54PJX/?_encoding=UTF8&pd_rd_w=1RXLT&content-id=amzn1.sym.14ff1b43-540a-4bfd-a18c-350bea29dfa2&pf_rd_p=14ff1b43-540a-4bfd-a18c-350bea29dfa2&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_Headphones
              - img "Boat Rockerz 113, 40H Battery, Dual Pair, Fast Charge, ENx Tech, Stream Ad Free Music via App Support, Magnetic Buds, Bluetooth Neckband, Wireless with Mic in Ear Earphones (Active Black)" [ref=e477]
            - link "Boat Rockerz 255 Pro+, 60HRS Battery, Fast Charge, IPX7, Dual Pairing, Low Latency, Magnetic Earbuds, in Ear Bluetooth Neckband, Wireless with Mic Earphones (Active Black)" [ref=e479] [cursor=pointer]:
              - /url: /boAt-Rockerz-255-Pro-Earphones/dp/B08TV2P1N8/?_encoding=UTF8&pd_rd_w=1RXLT&content-id=amzn1.sym.14ff1b43-540a-4bfd-a18c-350bea29dfa2&pf_rd_p=14ff1b43-540a-4bfd-a18c-350bea29dfa2&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_Headphones
              - img "Boat Rockerz 255 Pro+, 60HRS Battery, Fast Charge, IPX7, Dual Pairing, Low Latency, Magnetic Earbuds, in Ear Bluetooth Neckband, Wireless with Mic Earphones (Active Black)" [ref=e481]
            - link "Boat Airdopes 300, Cinematic Spatial Audio, 50HRS Battery, 4Mic AI ENx, Fast Charge, App Support, Low Latency, IPX4, v5.3 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Gunmetal Black)" [ref=e483] [cursor=pointer]:
              - /url: /boAt-Airdopes-300-Multipoint-Connection/dp/B0D3DH8TSC/?_encoding=UTF8&pd_rd_w=1RXLT&content-id=amzn1.sym.14ff1b43-540a-4bfd-a18c-350bea29dfa2&pf_rd_p=14ff1b43-540a-4bfd-a18c-350bea29dfa2&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_Headphones
              - img "Boat Airdopes 300, Cinematic Spatial Audio, 50HRS Battery, 4Mic AI ENx, Fast Charge, App Support, Low Latency, IPX4, v5.3 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Gunmetal Black)" [ref=e485]
            - link "Boat Rockerz 113, 40H Battery, Dual Pair, Fast Charge, ENx Tech, Stream Ad Free Music via App Support, Magnetic Buds, Bluetooth Neckband, Wireless with Mic in Ear Earphones (Ash Grey)" [ref=e487] [cursor=pointer]:
              - /url: /boAt-Rockerz-Magnetic-Bluetooth-Earphones/dp/B0F7Y67F6C/?_encoding=UTF8&pd_rd_w=1RXLT&content-id=amzn1.sym.14ff1b43-540a-4bfd-a18c-350bea29dfa2&pf_rd_p=14ff1b43-540a-4bfd-a18c-350bea29dfa2&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_Headphones
              - img "Boat Rockerz 113, 40H Battery, Dual Pair, Fast Charge, ENx Tech, Stream Ad Free Music via App Support, Magnetic Buds, Bluetooth Neckband, Wireless with Mic in Ear Earphones (Ash Grey)" [ref=e489]
        - generic [ref=e491]:
          - heading "Up to 80% off | Electronics & Accessories" [level=2] [ref=e493]
          - link "Electronics See all offers" [ref=e494] [cursor=pointer]:
            - /url: /events/greatsummersale/7/?_encoding=UTF8&pd_rd_w=NDYpw&content-id=amzn1.sym.48e58bb3-37eb-4705-9474-24041745273a&pf_rd_p=48e58bb3-37eb-4705-9474-24041745273a&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=ixm5w&pd_rd_r=be8d75ab-62ba-4ea1-a6b3-6db7cb459d18&ref_=pd_hp_d_atf_unk
            - img "Electronics" [ref=e497]
            - generic [ref=e499]:
              - generic [ref=e500]: See all offers
              - generic [ref=e501]: See all offers
      - generic [ref=e503]:
        - generic [ref=e505]:
          - heading "Minimum 50% off | Amazon brands & more" [level=2] [ref=e507]
          - generic [ref=e508]:
            - generic [ref=e509]:
              - link "Min. 50% off | Home essentials" [ref=e511] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=kitchen&rh=n%3A976442031%2Cn%3A1380510031%2Cp_n_is_private_label%3A16184648031&pd_rd_w=utPCu&content-id=amzn1.sym.d1279efc-4e59-4de7-93a0-6b26d164bd32&pf_rd_p=d1279efc-4e59-4de7-93a0-6b26d164bd32&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
                - img "Min. 50% off | Home essentials" [ref=e513]
                - generic [ref=e515]: Min. 50% off | Home storage
              - link "Starting ₹299 | Kitchen products" [ref=e517] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&rh=n%3A5925789031%2Cp_n_format_browse-bin%3A19560801031&pd_rd_w=utPCu&content-id=amzn1.sym.d1279efc-4e59-4de7-93a0-6b26d164bd32&pf_rd_p=d1279efc-4e59-4de7-93a0-6b26d164bd32&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
                - img "Starting ₹299 | Kitchen products" [ref=e519]
                - generic [ref=e521]: Starting ₹299 | Kitchen products
            - generic [ref=e522]:
              - link "Min. 40% off | Premium styles" [ref=e524] [cursor=pointer]:
                - /url: /b/?_encoding=UTF8&ie=UTF8&node=94991931031&pd_rd_w=utPCu&content-id=amzn1.sym.d1279efc-4e59-4de7-93a0-6b26d164bd32&pf_rd_p=d1279efc-4e59-4de7-93a0-6b26d164bd32&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
                - img "Min. 40% off | Premium styles" [ref=e526]
                - generic [ref=e528]: Min. 40% off | Premium styles
              - link "Starting ₹149 | Toys & fun games" [ref=e530] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&k=Soft%20toys%20and%20indoor%20games&i=toys&rh=n%3A1350380031%2Cp_n_format_browse-bin%3A30678570031&pd_rd_w=utPCu&content-id=amzn1.sym.d1279efc-4e59-4de7-93a0-6b26d164bd32&pf_rd_p=d1279efc-4e59-4de7-93a0-6b26d164bd32&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
                - img "Starting ₹149 | Toys & fun games" [ref=e532]
                - generic [ref=e534]: Starting ₹149 | Toys & fun games
          - link "Minimum 50% off | Amazon brands & more - See all offers" [ref=e536] [cursor=pointer]:
            - /url: /events/greatsummersale/13/?_encoding=UTF8&pd_rd_w=utPCu&content-id=amzn1.sym.d1279efc-4e59-4de7-93a0-6b26d164bd32&pf_rd_p=d1279efc-4e59-4de7-93a0-6b26d164bd32&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
            - generic [ref=e537]:
              - generic [ref=e538]: See all offers
              - generic [ref=e539]: See all offers
        - generic [ref=e541]:
          - heading "Up to 70% off | International brands" [level=2] [ref=e543]
          - link "Up to 70% off | International brands See all offers" [ref=e544] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&node=21469514031&pd_rd_w=yna0p&content-id=amzn1.sym.01aefe9e-e178-41c0-90d5-df41c1a05bf0&pf_rd_p=01aefe9e-e178-41c0-90d5-df41c1a05bf0&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
            - img "Up to 70% off | International brands" [ref=e547]
            - generic [ref=e549]:
              - generic [ref=e550]: See all offers
              - generic [ref=e551]: See all offers
        - generic [ref=e553]:
          - heading "Up to 80% off | Sports, outdoor & more" [level=2] [ref=e555]
          - generic [ref=e556]:
            - generic [ref=e557]:
              - link "Sports & fitness" [ref=e559] [cursor=pointer]:
                - /url: /l/215530914031/?_encoding=UTF8&pd_rd_w=fXL6h&content-id=amzn1.sym.710eb5d2-0835-4382-9b08-0a4b4125870f&pf_rd_p=710eb5d2-0835-4382-9b08-0a4b4125870f&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
                - img "Sports & fitness" [ref=e561]
                - generic [ref=e563]: Sports & fitness
              - link "Automotive" [ref=e565] [cursor=pointer]:
                - /url: https://www.amazon.in/b/ref=ohlr_halo_pc_9/?_encoding=UTF8&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-1&pf_rd_t=&pf_rd_i=976442031&ie=UTF8&node=4772060031&ref_=HaloPC_AutomotiveProducts_t9&pd_rd_w=fXL6h&content-id=amzn1.sym.710eb5d2-0835-4382-9b08-0a4b4125870f&pf_rd_p=710eb5d2-0835-4382-9b08-0a4b4125870f&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda
                - img "Automotive" [ref=e567]
                - generic [ref=e569]: Automotive
            - generic [ref=e570]:
              - link "Tools" [ref=e572] [cursor=pointer]:
                - /url: /l/5866078031/?_encoding=UTF8&pd_rd_w=fXL6h&content-id=amzn1.sym.710eb5d2-0835-4382-9b08-0a4b4125870f&pf_rd_p=710eb5d2-0835-4382-9b08-0a4b4125870f&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
                - img "Tools" [ref=e574]
                - generic [ref=e576]: Tools
              - link "Garden & outdoor" [ref=e578] [cursor=pointer]:
                - /url: /l/2454175031/?_encoding=UTF8&pd_rd_w=fXL6h&content-id=amzn1.sym.710eb5d2-0835-4382-9b08-0a4b4125870f&pf_rd_p=710eb5d2-0835-4382-9b08-0a4b4125870f&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
                - img "Garden & outdoor" [ref=e580]
                - generic [ref=e582]: Garden & outdoor
          - link "Up to 80% off | Sports, outdoor & more - See all deals" [ref=e584] [cursor=pointer]:
            - /url: /l/217277038031/?_encoding=UTF8&pd_rd_w=fXL6h&content-id=amzn1.sym.710eb5d2-0835-4382-9b08-0a4b4125870f&pf_rd_p=710eb5d2-0835-4382-9b08-0a4b4125870f&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
            - generic [ref=e585]:
              - generic [ref=e586]: See all deals
              - generic [ref=e587]: See all deals
        - generic [ref=e589]:
          - heading "Buy 2 Get 10% off, freebies & more offers" [level=2] [ref=e591]
          - link "Buy 2 Get 10% off, freebies & more offers See all offers" [ref=e592] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&ie=UTF8&node=31818347031&pd_rd_w=eLW8P&content-id=amzn1.sym.7c9f4c4c-1577-4b20-982d-df08c34bf13c&pf_rd_p=7c9f4c4c-1577-4b20-982d-df08c34bf13c&pf_rd_r=37ZMQ9HMXXTDYR865GVV&pd_rd_wg=JBm7b&pd_rd_r=7d7425cf-3dd5-45a3-aba7-30ca3014fdda&ref_=pd_hp_d_btf_unk
            - img "Buy 2 Get 10% off, freebies & more offers" [ref=e595]
            - generic [ref=e597]:
              - generic [ref=e598]: See all offers
              - generic [ref=e599]: See all offers
  - complementary "Your recently viewed items and featured recommendations"
  - generic [ref=e600]:
    - button "Back to top" [ref=e601] [cursor=pointer]:
      - generic [ref=e602]: Back to top
    - generic [ref=e603]:
      - generic [ref=e604]:
        - heading "Get to Know Us" [level=6] [ref=e605]
        - list [ref=e606]:
          - listitem [ref=e607]:
            - link "About Amazon" [ref=e608] [cursor=pointer]:
              - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=e609]:
            - link "Careers" [ref=e610] [cursor=pointer]:
              - /url: https://amazon.jobs
          - listitem [ref=e611]:
            - link "Press Releases" [ref=e612] [cursor=pointer]:
              - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=e613]:
            - link "Amazon Science" [ref=e614] [cursor=pointer]:
              - /url: https://www.amazon.science
      - generic [ref=e616]:
        - heading "Connect with Us" [level=6] [ref=e617]
        - list [ref=e618]:
          - listitem [ref=e619]:
            - link "Facebook" [ref=e620] [cursor=pointer]:
              - /url: https://www.facebook.com/AmazonIN
          - listitem [ref=e621]:
            - link "Twitter" [ref=e622] [cursor=pointer]:
              - /url: https://x.com/AmazonIN
          - listitem [ref=e623]:
            - link "Instagram" [ref=e624] [cursor=pointer]:
              - /url: https://www.instagram.com/amazondotin
      - generic [ref=e626]:
        - heading "Make Money with Us" [level=6] [ref=e627]
        - list [ref=e628]:
          - listitem [ref=e629]:
            - link "Sell on Amazon" [ref=e630] [cursor=pointer]:
              - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
          - listitem [ref=e631]:
            - link "Sell under Amazon Accelerator" [ref=e632] [cursor=pointer]:
              - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
          - listitem [ref=e633]:
            - link "Protect and Build Your Brand" [ref=e634] [cursor=pointer]:
              - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
          - listitem [ref=e635]:
            - link "Amazon Global Selling" [ref=e636] [cursor=pointer]:
              - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
          - listitem [ref=e637]:
            - link "Supply to Amazon" [ref=e638] [cursor=pointer]:
              - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
          - listitem [ref=e639]:
            - link "Become an Affiliate" [ref=e640] [cursor=pointer]:
              - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
          - listitem [ref=e641]:
            - link "Fulfilment by Amazon" [ref=e642] [cursor=pointer]:
              - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
          - listitem [ref=e643]:
            - link "Advertise Your Products" [ref=e644] [cursor=pointer]:
              - /url: https://advertising.amazon.in/?ref=Amz.in
          - listitem [ref=e645]:
            - link "Amazon Pay on Merchants" [ref=e646] [cursor=pointer]:
              - /url: https://www.amazonpay.in/merchant
      - generic [ref=e648]:
        - heading "Let Us Help You" [level=6] [ref=e649]
        - list [ref=e650]:
          - listitem [ref=e651]:
            - link "Your Account" [ref=e652] [cursor=pointer]:
              - /url: /gp/css/homepage.html?ref_=footer_ya
          - listitem [ref=e653]:
            - link "Returns Centre" [ref=e654] [cursor=pointer]:
              - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
          - listitem [ref=e655]:
            - link "Recalls and Product Safety Alerts" [ref=e656] [cursor=pointer]:
              - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
          - listitem [ref=e657]:
            - link "100% Purchase Protection" [ref=e658] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
          - listitem [ref=e659]:
            - link "Amazon App Download" [ref=e660] [cursor=pointer]:
              - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
          - listitem [ref=e661]:
            - link "Help" [ref=e662] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
    - generic [ref=e664]:
      - link "Amazon India Home" [ref=e667] [cursor=pointer]:
        - /url: /ref=footer_logo
      - generic [ref=e670]:
        - generic [ref=e671]:
          - link "Choose a language for shopping. Current selection is English." [ref=e672] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
            - generic [ref=e674]: English
          - button "Expand to Change Language or Country" [ref=e675] [cursor=pointer]
        - button "Choose a country/region for shopping. The current selection is India." [ref=e676] [cursor=pointer]:
          - generic [ref=e678]: India
    - generic "More on Amazon" [ref=e679]:
      - generic "More on Amazon" [ref=e680]:
        - list [ref=e681]:
          - listitem [ref=e682]:
            - link "AbeBooks Books, art & collectibles" [ref=e683] [cursor=pointer]:
              - /url: https://www.abebooks.com/
              - heading "AbeBooks" [level=5] [ref=e684]
              - generic [ref=e685]:
                - text: Books, art
                - text: "& collectibles"
          - listitem [ref=e686]
          - listitem [ref=e687]:
            - link "Amazon Web Services Scalable Cloud Computing Services" [ref=e688] [cursor=pointer]:
              - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
              - heading "Amazon Web Services" [level=5] [ref=e689]
              - generic [ref=e690]:
                - text: Scalable Cloud
                - text: Computing Services
          - listitem [ref=e691]
          - listitem [ref=e692]:
            - link "Audible Download Audio Books" [ref=e693] [cursor=pointer]:
              - /url: https://www.audible.in/
              - heading "Audible" [level=5] [ref=e694]
              - generic [ref=e695]:
                - text: Download
                - text: Audio Books
          - listitem [ref=e696]
          - listitem [ref=e697]:
            - link "IMDb Movies, TV & Celebrities" [ref=e698] [cursor=pointer]:
              - /url: https://www.imdb.com/
              - heading "IMDb" [level=5] [ref=e699]
              - generic [ref=e700]:
                - text: Movies, TV
                - text: "& Celebrities"
        - list [ref=e701]:
          - listitem [ref=e702]:
            - link "Shopbop Designer Fashion Brands" [ref=e703] [cursor=pointer]:
              - /url: https://www.shopbop.com/
              - heading "Shopbop" [level=5] [ref=e704]
              - generic [ref=e705]:
                - text: Designer
                - text: Fashion Brands
          - listitem [ref=e706]
          - listitem [ref=e707]:
            - link "Amazon Business Everything For Your Business" [ref=e708] [cursor=pointer]:
              - /url: /business?ref=footer_aingw
              - heading "Amazon Business" [level=5] [ref=e709]
              - generic [ref=e710]:
                - text: Everything For
                - text: Your Business
          - listitem [ref=e711]
          - listitem [ref=e712]:
            - link "Amazon Prime Music 100 million songs, ad-free Over 15 million podcast episodes" [ref=e713] [cursor=pointer]:
              - /url: /music/prime?ref=footer_apm
              - heading "Amazon Prime Music" [level=5] [ref=e714]
              - generic [ref=e715]:
                - text: 100 million songs, ad-free
                - text: Over 15 million podcast episodes
          - listitem [ref=e716]
          - listitem [ref=e717]
    - generic [ref=e718]:
      - list [ref=e719]:
        - listitem [ref=e720]:
          - link "Conditions of Use & Sale" [ref=e721] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
        - listitem [ref=e722]:
          - link "Privacy Notice" [ref=e723] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
        - listitem [ref=e724]:
          - link "Interest-Based Ads" [ref=e725] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
      - generic [ref=e726]: © 1996-2026, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | export class HomePage extends BasePage {
  5  |   readonly searchBox: Locator;
  6  |   readonly searchButton: Locator;
  7  |   readonly noResultsMessage: Locator;
  8  |   readonly departmentDropdown: Locator;
  9  |   readonly sortDropdown: Locator;
  10 |   readonly priceFilter: Locator;
  11 |   readonly hamburgerMenu: Locator;
  12 |   readonly hamburgerMenuClose: Locator;
  13 |   readonly languageSelector: Locator;
  14 |   readonly footerLinks: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     super(page);
  18 |     this.searchBox = page.locator("#twotabsearchtextbox");
  19 |     this.searchButton = page.locator("#nav-search-submit-button");
  20 |     this.noResultsMessage = page.locator(".s-no-outline span.a-size-medium");
  21 |     this.departmentDropdown = page.locator("#searchDropdownBox");
  22 |     this.sortDropdown = page.locator("#s-result-sort-select");
  23 |     this.priceFilter = page
  24 |       .locator("div#priceRefinements span.a-list-item")
  25 |       .first();
  26 |     this.hamburgerMenu = page.locator("#nav-hamburger-menu");
  27 |     this.hamburgerMenuClose = page.locator(".nav-sprite.hmenu-close-icon");
  28 |     this.languageSelector = page.locator("#icp-nav-flyout");
  29 |     this.footerLinks = page.locator(".navFooterLinkCol");
  30 |   }
  31 | 
  32 |   async searchProduct(product: string) {
  33 |     await this.searchBox.fill(product);
  34 |     await this.searchButton.click();
  35 |   }
  36 | 
  37 |   async searchWithCategory(category: string, product: string) {
  38 |     await this.departmentDropdown.selectOption({ label: category });
  39 |     await this.searchProduct(product);
  40 |   }
  41 | 
  42 |   async verifySearchBoxVisible() {
> 43 |     await expect(this.searchBox).toBeVisible();
     |                                  ^ Error: expect(locator).toBeVisible() failed
  44 |   }
  45 | 
  46 |   async verifyNoResultsMessage(product: string) {
  47 |     await expect(this.noResultsMessage).toContainText("No results for");
  48 |   }
  49 | 
  50 |   async applyFirstPriceFilter() {
  51 |     await this.priceFilter.click();
  52 |   }
  53 | 
  54 |   async sortBy(sortOption: string) {
  55 |     // "Price: High to Low" usually corresponds to a specific value, but Playwright selectOption can work with labels.
  56 |     await this.sortDropdown.selectOption({ label: sortOption });
  57 |   }
  58 | 
  59 |   async openHamburgerMenu() {
  60 |     await this.hamburgerMenu.click();
  61 |   }
  62 | 
  63 |   async selectHamburgerCategory(categoryName: string) {
  64 |     await this.page
  65 |       .locator(`.hmenu-item:has-text("${categoryName}")`)
  66 |       .first()
  67 |       .click();
  68 |   }
  69 | 
  70 |   async clickLanguageSelector() {
  71 |     await this.languageSelector.click();
  72 |   }
  73 | 
  74 |   async verifyFooterVisible() {
  75 |     await expect(this.footerLinks.first()).toBeVisible();
  76 |   }
  77 | }
  78 | 
```