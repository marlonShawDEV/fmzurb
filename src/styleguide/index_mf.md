
# Framework 

<p class="lead">The Multifamily site utilizes the same framework as the <a href="styleguide_fm.html#framework">FM Global template</a>. The multifamily template currently has these Foundation components enabled, disabled, and customized. You should familiarize yourself with the enabled and customized components.</p>
<div class="row">
<div class="column large-6">
<h5>Enabled</h5> 
<a href="http://foundation.zurb.com/sites/docs/accordion-menu.html">accordionMenu</a><br>
buttons	(styles are different, see <a href="styleguide_fm.html#buttons">buttons</a>)<br>
<a href="http://foundation.zurb.com/sites/docs/button-group.html">button-group</a><br>
<a href="http://foundation.zurb.com/sites/docs/card.html">card</a><br>
<a href="http://foundation.zurb.com/sites/docs/close-button.html">close-button</a><br>
<a href="http://foundation.zurb.com/sites/docs/equalizer.html">equalizer</a><br>
<a href="http://foundation.zurb.com/sites/docs/float-classes.html">float-classes</a><br>
<a href="http://foundation.zurb.com/sites/docs/forms.html">forms</a> and <a href="http://foundation.zurb.com/sites/docs/abide.html">abide</a><br>
<a href="http://foundation.zurb.com/sites/docs/menu.html">menu</a><br>
<a href="http://foundation.zurb.com/sites/docs/motion-ui.html">motion-ui</a><br>
<a href="http://foundation.zurb.com/sites/docs/responsive-embed.html">responsive-embed</a><br>
<a href="http://foundation.zurb.com/sites/docs/responsive-navigation.html#responsive-toggle">responsive title-bar</a><br>
<a href="http://foundation.zurb.com/sites/docs/toggler.html">toggler</a><br>
<a href="http://foundation.zurb.com/sites/docs/tooltip.html">tooltip</a><br>
<a href="http://foundation.zurb.com/sites/docs/top-bar.html">top-bar</a><br>
<a href="http://foundation.zurb.com/sites/docs/typography-helpers.html">typography helpers</a><br>
<a href="http://foundation.zurb.com/sites/docs/visibility.html">visibility classes</a><br>
<br>
<h5>Customized</h5>
abide (custom routines and patterns, see <a href="styleguide_abide.html">abide</a>)<br>
accordion	(styles are different, see <a href="styleguide_fm.html#accordions">accordions</a> and <a href="#faqs">FAQs</a>)<br>
callout	(styles are different, see <a href="styleguide_fm.html#callouts">callouts</a>)<br>
grid (the outermost row/column is inserted by <a href="#the-templates">the template</a>)	<br>
label	(classes are different, see <a href="#label">labels</a>) <br>
media-object	(styles are different, see <a href="styleguide_fm.html#media-objects">media objects</a>)<br>
orbit	(buttons and slide nav is automated for you, see <a href="styleguide_orbit.html">carousels</a>) <br>
reveal (buttons are automated for you, see <a href="styleguide_fm.html#modals">modals</a>)<br>
tabs (styles are different, see <a href="styleguide_fm.html#tabs">tabs</a>)<br>
table	(styles are different, see <a href="styleguide_fm.html#data-tables">data tables</a>)
</div>
<div class="column large-6">
<h5>Disabled</h5>
  <div class="callout background-concrete small">
  <div>If you need to have a currently disabled component enabled, contact Sherry and Jon so that it can be added to the script bundle and properly styled.</div>
  </div>  
drilldown	<br>
drilldown-menu	<br>
dropdown	<br>
dropdown-menu	<br>
flex-video<br>
interchange	<br>
magellan	<br>
offcanvas	<br>
pagination	<br>
progress-bar	<br>
progress-element 	<br>
range-input	<br>
responsiveMenu	<br>
responsiveToggle	<br>
slider	<br>
sticky	<br>
switch	<br>
thumbnail	
</div>
</div>



# Heros

<p class="lead">There are several different hero styles, depending upon page type.  For pages that aren't landing pages or relying on a blog-like format, you should use a [page title](styleguide_fm.html#page-title) instead of a hero.</p>

---

## Landing Page Heros

Landing Pages are those pages that are linked from the primary navigation. Add one of the following classes to the `.hero-blended` container to specify the background for a particular landing page: `.seller-servicers-hero`, `.research-landing-hero`, `.investors-hero`, `.borrowers-hero`, `.products-hero`, `.news-hero`, `.about-hero`, `.viewpoints-landing-hero`.


```html_example
<div class="hero-blended seller-servicers-hero">
  <div class="row">
    <div class="column hero-blended-content">
      <h1 class="hero-title">Seller/Servicers</h1>
      <p>We're making it easier for our <strong>Seller/Servicers</strong> to get it done.</p>
    </div>
  </div>
</div>
```



# Cards

<p class="lead">Cards are a are a popular and flexible UI component, typically used to group article entries. </p>

<p>A card is just an element with a `.card` class applied. You can put any kind of content inside.
Make sure you wrap your content in a `.card-section` element in order to achieve the traditional card look.</p>
<p>A card container has no padding, allowing you to place full-bleed images inside. Use the `.card-divider` and `.card-section` classes to sub-divide a card. To center the text content (for people cards, for example) simply add class `.text-center` to the `.card-section` container.</p>

---

## Viewpoints Cards

<p>This style of card is used for Viewpoints articles. </p>

- If the cards should have a different background than the container they are in, add a [background color class](#colors).

```html
<div class="column">
  <div class="card background-concrete">
    <div class="card-divider" data-equalizer-watch>
      <div class="article-date">Mar 6, 2017</div>
      <h3 class="card-title-large"><a href="#">Multifamily Notes from San Diego</a></h3>
      <p class="card-blurb-large">Freddie Mac SVP John Cannon shares some of his notes from the Mortgage Bankers Association's Commercial Real Estate Finance Conference.</p>
      <figure class="avatar">
        <div>
          <img alt="John Cannon" src="http://www.freddiemac.com/perspectives/images/authors/EP_John_Cannon-80.jpg">
        </div>
        <div>
          <figcaption class="reduce">
            <strong class="uppercase">John Cannon</strong><br>SVP Multifamily Production and Sales	
          </figcaption>
        </div>
      </figure>
    </div>
  </div>
</div>
```

<div class="row medium-up-2 large-up-3 xlarge-up-4 perspectives" data-equalizer data-equalize-by-row="true">
  <div class="column">
    <div class="card background-concrete">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">Mar 6, 2017</div>
        <h3 class="card-title-large"><a href="#">Multifamily Notes from San Diego</a></h3>
        <p class="card-blurb-large">Freddie Mac SVP John Cannon shares some of his notes from the Mortgage Bankers Association's Commercial Real Estate Finance Conference.</p>
        <figure class="avatar">
          <div>
            <img alt="John Cannon" src="http://www.freddiemac.com/perspectives/images/authors/EP_John_Cannon-80.jpg">
          </div>
          <div>
            <figcaption class="reduce">
              <strong class="uppercase">John Cannon</strong><br>SVP Multifamily Production and Sales	
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card background-concrete">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">Dec 12, 2016</div>
        <h3 class="card-title-large"><a href="#">Multifamily Is On a Roll</a></h3>
        <p class="card-blurb-large">Freddie Mac Multifamily is on track to purchase and securitize record volumes of loans. Barring any surprises, the multifamly market could grow 5 to 10 percent in 2017.</p>
        <figure class="avatar">
          <div>
            <img alt="David Brickman" src="http://www.freddiemac.com/perspectives/images/authors/EP_Davd_Brickman-80.jpg">
          </div>
          <div>
            <figcaption class="reduce">
              <strong class="uppercase">David Brickman</strong><br>EVP Multifamily Business	
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card background-concrete">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">Oct 3, 2016</div>
        <h3 class="card-title-large"><a href="#">Rental Housing Needs a Green Advantage</a></h3>
        <p class="card-blurb-large">The 21st century has been hard on utility bills, which, in turn, have been hard on multifamily property owners and tenants. That's why Freddie Mac launched Green Advantage.</p>
        <figure class="avatar">
          <div>
            <img alt="David Leopold" src="http://www.freddiemac.com/perspectives/images/authors/EP_David_Leopold-80.jpg">
          </div>
          <div>
            <figcaption class="reduce">
              <strong class="uppercase">David Leopold</strong><br>VP Multifamily Affordable Housing Production	
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card background-concrete">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">Feb 29, 2016</div>
        <h3 class="card-title-large"><a href="#">Crafting Creative Solutions, Staying True to Our Principles</a></h3>
        <p class="card-blurb-large">More important than talking about the dire need for rental housing that's affordable to people earning low or moderate incomes is doing something to help change the situation.</p>
        <figure class="avatar">
          <div>
            <img alt="Deborah Jenkins" src="http://www.freddiemac.com/perspectives/images/authors/EP_Debby_Jenkins-80.jpg">
          </div>
          <div>
            <figcaption class="reduce">
              <strong class="uppercase">Deborah Jenkins</strong><br>SVP Multifamily Underwriting &amp; Credit	
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
</div>

---    

## News and Research Cards

<p>This style of card is used for News and Research articles. The third column gets hidden when there isn't room thanks to an extra class of `.show-for-xlarge`.</p>

```html
<div class="column">
  <div class="card gutter-bottom">
    <div class="background-concrete" data-equalizer-watch>
      <a class="overlay mask block" href="#">
        <img src="/images/multifamily/cn_optimistic.jpg" alt="Img" />
      </a>
      <div class="card-divider">
        <p class="article-date">September 06, 2017</p>
        <h3 class="card-title"><a href="#">Most in Industry Optimistic about Multifamily</a></h3>
        <p class="card-blurb">How do lenders, developers, builders and investors feel about the market and where it is going?</p>
      </div>
    </div>
  </div>
</div>
```

<div class="two-column-layout">
  <div class="row two-column-row">
    <main class="column">
      <div class="jut">
        <div class="row medium-up-2 xlarge-up-3 gutter-top"  data-equalizer data-equalize-by-row="true">
          <div class="column">
            <div class="card gutter-bottom">
              <div class="background-concrete" data-equalizer-watch>
                <a class="overlay mask block" href="#">
                  <img src="/images/multifamily/cn_optimistic.jpg" alt="Img" />
                </a>
                <div class="card-divider">
                  <p class="article-date">September 06, 2017</p>
                  <h3 class="card-title"><a href="#">Most in Industry Optimistic about Multifamily</a></h3>
                  <p class="card-blurb">How do lenders, developers, builders and investors feel about the market and where it is going?</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card gutter-bottom">
              <div class="background-concrete" data-equalizer-watch>
                <a class="overlay mask block" href="#">
                  <img src="/images/multifamily/cn_sky_deal.jpg" alt="Img" />
                </a>
                <div class="card-divider">
                  <p class="article-date">August 30, 2017</p>
                  <h3 class="card-title"><a href="#">Sky Deal Provides Mixed-Income Housing in Sky-High Rental Market</a></h3>
                  <p class="card-blurb">Affordable rental units in midtown Manhattan?  In a city where rents are sky high, the landmark Sky Residences deal provides funding for 1,175 rental apartments&mdash;with 25 percent of these for lower-income residents.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column show-for-xlarge">
            <div class="card gutter-bottom">
              <div class="background-concrete" data-equalizer-watch>
                <a class="overlay mask block" href="#">
                  <img src="/images/multifamily/news_placeholder.jpg" alt="Img" />
                </a>
                <div class="card-divider">
                  <p class="article-date">August 30, 2017</p>
                  <h3 class="card-title"><a href="#">Hurricane Harvey Update: (please check regularly for new information)</a></h3>
                  <p class="card-blurb">We at Freddie Mac Multifamily stand ready to address properties affected by Hurricane Harvey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

---

## Cards for Term Sheets

```html
<div class="column">
  <div class="card primary background-concrete" data-equalizer-watch> 
    <span class="background-primary label uppercase weight-bold">Specialty Asset</span>
    <div class="card-divider weight-medium">
      <p class="grid-block-text snug">HUD Section 8 Financing</p>
      <p><a href="#"><span class="show-for-sr">HUD Section 8 Financing </span>Term Sheet</a></p>
    </div>
  </div>
</div>
```

<div class="row medium-up-2 xlarge-up-4" data-equalizer data-equalize-on="medium" data-equalize-by-row="true">
  <div class="column">
    <div class="card primary background-concrete" data-equalizer-watch> 
      <span class="background-green label uppercase weight-bold">Core</span>
      <div class="card-divider weight-medium">
        <p class="grid-block-text snug">Fixed-Rate Loan</p>
        <p><a href="#"><span class="show-for-sr">Fixed-Rate Loan </span>Term Sheet</a></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card primary background-concrete" data-equalizer-watch> 
      <span class="background-primary label uppercase weight-bold">Specialty Asset</span>
      <div class="card-divider weight-medium">
        <p class="grid-block-text snug">HUD Section 8 Financing</p>
        <p><a href="#"><span class="show-for-sr">HUD Section 8 Financing </span>Term Sheet</a></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card primary background-concrete" data-equalizer-watch> 
      <span class="background-blue label uppercase weight-bold">Specialty Product</span>
      <div class="card-divider weight-medium">
        <p class="grid-block-text snug">Green Advantage</p>
        <p><a href="#"><span class="show-for-sr">Green Advantage </span>Term Sheet</a></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card primary background-concrete" data-equalizer-watch> 
      <span class="background-teal label uppercase weight-bold">Seniors Housing</span>
      <div class="card-divider weight-medium">
        <p class="grid-block-text snug">Seniors Housing Loan</p>
        <p><a href="#"><span class="show-for-sr">Seniors Housing Loan </span>Term Sheet</a></p>
      </div>
    </div>
  </div>
</div>

---

## People Cards

- If the cards should have a different background than the container they are in, add a [background color class](#colors).

```html_example
<div>
</div>
```

---

## Business Line Blocks

```html
<div class="column">
  <a class="block background-sheer mf-bg2" href="#">
    <div class="text-center background-blue">
      <div class="callout no-margin background-primary" data-equalizer-watch="upper">
        <h2>Purchase &amp; <br class="show-for-medium"/>Deliver</h2>
      </div>
      <div class="callout chevron-base" data-equalizer-watch="lower">
        <p class="enlarge">Complete final delivery and sell us the loan.</p>
        <div class="chevron"></div>
      </div>
    </div>
  </a>
</div>
```

<div class="row column">
  <div class="gutter-bottom" data-equalizer="upper" data-equalize-on="medium">
    <div class="row medium-up-2 large-up-4" data-equalizer="lower"  data-equalize-by-row="true">
      <div class="column">
        <a class="block background-sheer mf-bg1" href="#">
          <div class="text-center background-blue">
            <div class="callout no-margin background-primary" data-equalizer-watch="upper">
              <h2>Originate &amp; <br class="show-for-medium"/>Underwrite</h2>
            </div>
            <div class="callout chevron-base" data-equalizer-watch="lower">
              <p class="enlarge">Complete loan origination with us, at the quote and underwriting stages.</p>
              <div class="chevron"></div>
            </div>
          </div>
        </a>
      </div>
      <div class="column">
        <a class="block background-sheer mf-bg2" href="#">
          <div class="text-center background-blue">
            <div class="callout no-margin background-primary" data-equalizer-watch="upper">
              <h2>Purchase &amp; <br class="show-for-medium"/>Deliver</h2>
            </div>
            <div class="callout chevron-base" data-equalizer-watch="lower">
              <p class="enlarge">Complete final delivery and sell us the loan.</p>
              <div class="chevron"></div>
            </div>
          </div>
        </a>
      </div>
      <div class="column">
        <a class="block background-sheer mf-bg3" href="#">
          <div class="text-center background-blue">
            <div class="callout no-margin background-primary" data-equalizer-watch="upper">
              <h2>Investor <br class="show-for-medium"/>Reporting</h2>
            </div>
            <div class="callout  chevron-base" data-equalizer-watch="lower">
              <p class="enlarge">Report loan and bond data to us in the accounting, payoff, and wire request processes.</p>
              <div class="chevron"></div>
            </div>
          </div>
        </a>
      </div>
      <div class="column">
        <a class="block background-sheer mf-bg7" href="#">
          <div class="text-center background-blue">
            <div class="callout no-margin background-primary" data-equalizer-watch="upper">
              <h2>Asset  <br class="show-for-medium"/>Management</h2>
            </div>
            <div class="callout chevron-base" data-equalizer-watch="lower">
              <p class="enlarge">Monitor and report on loans to effectively manage asset performance.</p>
              <div class="chevron"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>  
</div>

---

## Lender Blocks

```html
<div class="column">
  <a class="block background-sheer mf-bg1" href="#">
    <div class="text-center background-blue">
      <div class="callout no-margin background-primary" data-equalizer-watch="upper">
        <p><svg aria-hidden="true" width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.st0{fill:#447BBD;stroke:#FFFFFF;stroke-width:0.6229;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#FFFFFF;stroke-width:0.6231;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="Outline_Icons"><circle class="st0" cx="12" cy="12" r="11.5"/><path class="st1" d="M6.1 5.4h11.8v14.5H6.1z"/><path class="st1" d="M11 17.2h2.1v2.7H11z"/><path class="st1" d="M11 13.7h2.1v2.1H11z"/><path class="st1" d="M14.4 13.7h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 13.7h2.1v2.1H7.5z"/><path class="st1" d="M11 10.3h2.1v2.1H11z"/><path class="st1" d="M14.4 10.3h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 10.3h2.1v2.1H7.5z"/><path class="st1" d="M11 6.8h2.1v2.1H11z"/><path class="st1" d="M14.4 6.8h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 6.8h2.1v2.1H7.5z"/><path class="st1" d="M16.5 4h-9L6.1 5.4h11.8z"/></g></svg></p>
        <h3>Conventional<br><span class="weight-light">Lenders</span></h3>
      </div>
      <div class="callout chevron-base" data-equalizer-watch="lower">
        <p class="enlarge">Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
        <div class="chevron"></div>
      </div>
    </div>
  </a>
</div>
```

<div class="gutter-bottom" data-equalizer="upper" data-equalize-on="medium">
  <div class="row medium-up-2 large-up-4" data-equalizer="lower">
    <div class="column">
      <a class="block background-sheer mf-bg1" href="#">
        <div class="text-center background-blue">
          <div class="callout no-margin background-primary" data-equalizer-watch="upper">
            <p><svg aria-hidden="true" width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.st0{fill:#447BBD;stroke:#FFFFFF;stroke-width:0.6229;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#FFFFFF;stroke-width:0.6231;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="Outline_Icons"><circle class="st0" cx="12" cy="12" r="11.5"/><path class="st1" d="M6.1 5.4h11.8v14.5H6.1z"/><path class="st1" d="M11 17.2h2.1v2.7H11z"/><path class="st1" d="M11 13.7h2.1v2.1H11z"/><path class="st1" d="M14.4 13.7h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 13.7h2.1v2.1H7.5z"/><path class="st1" d="M11 10.3h2.1v2.1H11z"/><path class="st1" d="M14.4 10.3h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 10.3h2.1v2.1H7.5z"/><path class="st1" d="M11 6.8h2.1v2.1H11z"/><path class="st1" d="M14.4 6.8h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 6.8h2.1v2.1H7.5z"/><path class="st1" d="M16.5 4h-9L6.1 5.4h11.8z"/></g></svg></p>
            <h3>Conventional<br><span class="weight-light">Lenders</span></h3>
          </div>
          <div class="callout chevron-base" data-equalizer-watch="lower">
            <p class="enlarge">Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
            <div class="chevron"></div>
          </div>
        </div>
      </a>
    </div>
    <div class="column">
      <a class="block background-sheer mf-bg2" href="#">
        <div class="text-center background-blue">
          <div class="callout no-margin background-primary" data-equalizer-watch="upper">
            <p><svg aria-hidden="true" width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.st0{fill:#447BBD;stroke:#FFFFFF;stroke-width:0.6229;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#FFFFFF;stroke-width:0.623;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="Outline_Icons"><circle class="st0" cx="12" cy="12" r="11.5"/><path class="st1" d="M13.5 18.7H5.3V5.3h13.4v9.9"/><path class="st1" d="M12.3 7.6c0-.6-.5-1.2-1.2-1.2S10 7 10 7.6v2.9h2.3V7.6z"/><path class="st1" d="M12.3 13.5c0-.6-.5-1.2-1.2-1.2s-1.1.5-1.1 1.2v2.9h2.3v-2.9z"/><path class="st1" d="M17.6 11.7c0-.6-.5-1.2-1.2-1.2h-.6c-.6 0-1.2.5-1.2 1.2v3.5h3v-3.5z"/><circle class="st1" cx="16.1" cy="7.9" r="1.2"/><path class="st1" d="M13.5 15.2h5.2v3.5h-5.2z"/><path class="st1" d="M13.5 16.4h5.2"/><path class="st1" d="M13.5 17.6h5.2"/><path class="st1" d="M13.5 5.3v9.9"/></g><path class="st1" d="M8.7 13.5c0-.6-.5-1.2-1.2-1.2s-1.1.5-1.1 1.2v2.9h2.3v-2.9z"/><path class="st1" d="M8.7 7.6c0-.6-.5-1.2-1.2-1.2s-1.1.5-1.1 1.2v2.9h2.3V7.6z"/></svg></p>
            <h3>Small Balance Loan<br><span class="weight-light">Lenders</span></h3>
          </div>
          <div class="callout chevron-base" data-equalizer-watch="lower">
            <p class="enlarge">Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
            <div class="chevron"></div>
          </div>
        </div>
      </a>
    </div>
    <div class="column">
      <a class="block background-sheer mf-bg3" href="#">
        <div class="text-center background-blue">
          <div class="callout no-margin background-primary" data-equalizer-watch="upper">
            <p><svg aria-hidden="true" width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.st0{fill:#447BBD;stroke:#FFFFFF;stroke-width:0.6229;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#FFFFFF;stroke-width:0.623;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="Outline_Icons"><circle class="st0" cx="12" cy="12" r="11.5"/><path class="st1" d="M5.3 18.7h13.4"/><path class="st1" d="M7 6h10v12.7H7z"/><path class="st1" d="M17.7 5.4l-5.7-2-5.7 2V6h11.4z"/><path class="st1" d="M11 15.4h2v3.3h-2z"/><path class="st1" d="M8.3 7.4h1.3v1.3H8.3z"/><path class="st1" d="M11 7.4h2v1.3h-2z"/><path class="st1" d="M14.3 7.4h1.3v1.3h-1.3z"/><path class="st1" d="M8.3 10h1.3v1.3H8.3z"/><path class="st1" d="M11 10h2v1.3h-2z"/><path class="st1" d="M14.3 10h1.3v1.3h-1.3z"/><path class="st1" d="M8.3 12.7h1.3V14H8.3z"/><path class="st1" d="M11 12.7h2V14h-2z"/><path class="st1" d="M14.3 12.7h1.3V14h-1.3z"/><path class="st1" d="M8.3 15.4h1.3v1.3H8.3z"/><path class="st1" d="M14.3 15.4h1.3v1.3h-1.3z"/></g></svg></p>
            <h3>Targeted Affordable<br><span class="weight-light">Lenders</span></h3>
          </div>
          <div class="callout chevron-base" data-equalizer-watch="lower">
            <p class="enlarge">Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
            <div class="chevron"></div>
          </div>
        </div>
      </a>
    </div>
    <div class="column">
      <a class="block background-sheer mf-bg4" href="#">
        <div class="text-center background-blue">
          <div class="callout no-margin background-primary" data-equalizer-watch="upper">
            <p><svg aria-hidden="true" width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.st0{fill:#447BBD;stroke:#FFFFFF;stroke-width:0.6229;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#FFFFFF;stroke-width:0.623;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st2{fill:none;stroke:#FFFFFF;stroke-width:0.623;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="Outline_Icons"><circle class="st0" cx="12" cy="12" r="11.5"/><path class="st1" d="M3.4 17.5h17.2"/><path class="st1" d="M3.6 11.4l7.3-1.2"/><path class="st2" d="M4.9 11.2v6.3"/><path class="st1" d="M9.8 7.3L15 4.1l5.2 3.2"/><path class="st2" d="M19.1 6.6v10.9"/><path class="st1" d="M12.4 14.5h5.2v3h-5.2z"/><path class="st1" d="M15.3 14.5v3"/><path class="st1" d="M6.4 13.2h3v4.3h-3z"/><path class="st1" d="M6.4 12h3"/><path class="st2" d="M10.9 6.7v10.8"/><path class="st1" d="M12.4 11.2h5.2v1.9h-5.2z"/><path class="st1" d="M12.4 7.7h5.2v1.9h-5.2z"/></g></svg></p>
            <h3>Seniors Housing<br><span class="weight-light">Lenders</span></h3>
          </div>
          <div class="callout chevron-base" data-equalizer-watch="lower">
            <p class="enlarge">Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
            <div class="chevron"></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
   
---

## Product Blocks

```html
<div class="column">
  <a class="block background-sheer mf-bg5" href="#">
    <div class="text-center background-blue">
      <div class="callout no-margin background-primary" data-equalizer-watch="upper">
        <p><svg aria-hidden="true" width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.st0{fill:#447BBD;stroke:#FFFFFF;stroke-width:0.6229;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#FFFFFF;stroke-width:0.6231;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="Outline_Icons"><circle class="st0" cx="12" cy="12" r="11.5"/><path class="st1" d="M6.1 5.4h11.8v14.5H6.1z"/><path class="st1" d="M11 17.2h2.1v2.7H11z"/><path class="st1" d="M11 13.7h2.1v2.1H11z"/><path class="st1" d="M14.4 13.7h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 13.7h2.1v2.1H7.5z"/><path class="st1" d="M11 10.3h2.1v2.1H11z"/><path class="st1" d="M14.4 10.3h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 10.3h2.1v2.1H7.5z"/><path class="st1" d="M11 6.8h2.1v2.1H11z"/><path class="st1" d="M14.4 6.8h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 6.8h2.1v2.1H7.5z"/><path class="st1" d="M16.5 4h-9L6.1 5.4h11.8z"/></g></svg></p>
        <h3>Conventional</h3>
      </div>
      <div class="callout chevron-base" data-equalizer-watch="lower">
        <p class="enlarge">Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
        <div class="chevron"></div>
      </div>
    </div>
  </a>
</div>
```

<div class="gutter-bottom" data-equalizer="upper" data-equalize-on="medium">
  <div class="row medium-up-2 large-up-4" data-equalizer="lower">
    <div class="column">
      <a class="block background-sheer mf-bg5" href="#">
        <div class="text-center background-blue">
          <div class="callout no-margin background-primary" data-equalizer-watch="upper">
            <p><svg aria-hidden="true" width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.st0{fill:#447BBD;stroke:#FFFFFF;stroke-width:0.6229;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#FFFFFF;stroke-width:0.6231;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="Outline_Icons"><circle class="st0" cx="12" cy="12" r="11.5"/><path class="st1" d="M6.1 5.4h11.8v14.5H6.1z"/><path class="st1" d="M11 17.2h2.1v2.7H11z"/><path class="st1" d="M11 13.7h2.1v2.1H11z"/><path class="st1" d="M14.4 13.7h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 13.7h2.1v2.1H7.5z"/><path class="st1" d="M11 10.3h2.1v2.1H11z"/><path class="st1" d="M14.4 10.3h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 10.3h2.1v2.1H7.5z"/><path class="st1" d="M11 6.8h2.1v2.1H11z"/><path class="st1" d="M14.4 6.8h2.1v2.1h-2.1z"/><path class="st1" d="M7.5 6.8h2.1v2.1H7.5z"/><path class="st1" d="M16.5 4h-9L6.1 5.4h11.8z"/></g></svg></p>
            <h3>Conventional</h3>
          </div>
          <div class="callout chevron-base" data-equalizer-watch="lower">
            <p class="enlarge">Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
            <div class="chevron"></div>
          </div>
        </div>
      </a>
    </div>
    <div class="column">
      <a class="block background-sheer mf-bg2" href="#">
        <div class="text-center background-blue">
          <div class="callout no-margin background-primary" data-equalizer-watch="upper">
            <p><svg aria-hidden="true" width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.st0{fill:#447BBD;stroke:#FFFFFF;stroke-width:0.6229;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#FFFFFF;stroke-width:0.623;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="Outline_Icons"><circle class="st0" cx="12" cy="12" r="11.5"/><path class="st1" d="M13.5 18.7H5.3V5.3h13.4v9.9"/><path class="st1" d="M12.3 7.6c0-.6-.5-1.2-1.2-1.2S10 7 10 7.6v2.9h2.3V7.6z"/><path class="st1" d="M12.3 13.5c0-.6-.5-1.2-1.2-1.2s-1.1.5-1.1 1.2v2.9h2.3v-2.9z"/><path class="st1" d="M17.6 11.7c0-.6-.5-1.2-1.2-1.2h-.6c-.6 0-1.2.5-1.2 1.2v3.5h3v-3.5z"/><circle class="st1" cx="16.1" cy="7.9" r="1.2"/><path class="st1" d="M13.5 15.2h5.2v3.5h-5.2z"/><path class="st1" d="M13.5 16.4h5.2"/><path class="st1" d="M13.5 17.6h5.2"/><path class="st1" d="M13.5 5.3v9.9"/></g><path class="st1" d="M8.7 13.5c0-.6-.5-1.2-1.2-1.2s-1.1.5-1.1 1.2v2.9h2.3v-2.9z"/><path class="st1" d="M8.7 7.6c0-.6-.5-1.2-1.2-1.2s-1.1.5-1.1 1.2v2.9h2.3V7.6z"/></svg></p>
            <h3>Small Balance Loan</h3>
          </div>
          <div class="callout chevron-base" data-equalizer-watch="lower">
            <p class="enlarge">Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
            <div class="chevron"></div>
          </div>
        </div>
      </a>
    </div>
    <div class="column">
      <a class="block background-sheer mf-bg3" href="#">
        <div class="text-center background-blue">
          <div class="callout no-margin background-primary" data-equalizer-watch="upper">
            <p><svg aria-hidden="true" width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.st0{fill:#447BBD;stroke:#FFFFFF;stroke-width:0.6229;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#FFFFFF;stroke-width:0.623;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="Outline_Icons"><circle class="st0" cx="12" cy="12" r="11.5"/><path class="st1" d="M5.3 18.7h13.4"/><path class="st1" d="M7 6h10v12.7H7z"/><path class="st1" d="M17.7 5.4l-5.7-2-5.7 2V6h11.4z"/><path class="st1" d="M11 15.4h2v3.3h-2z"/><path class="st1" d="M8.3 7.4h1.3v1.3H8.3z"/><path class="st1" d="M11 7.4h2v1.3h-2z"/><path class="st1" d="M14.3 7.4h1.3v1.3h-1.3z"/><path class="st1" d="M8.3 10h1.3v1.3H8.3z"/><path class="st1" d="M11 10h2v1.3h-2z"/><path class="st1" d="M14.3 10h1.3v1.3h-1.3z"/><path class="st1" d="M8.3 12.7h1.3V14H8.3z"/><path class="st1" d="M11 12.7h2V14h-2z"/><path class="st1" d="M14.3 12.7h1.3V14h-1.3z"/><path class="st1" d="M8.3 15.4h1.3v1.3H8.3z"/><path class="st1" d="M14.3 15.4h1.3v1.3h-1.3z"/></g></svg></p>
            <h3>Targeted Affordable</h3>
          </div>
          <div class="callout chevron-base" data-equalizer-watch="lower">
            <p class="enlarge">Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
            <div class="chevron"></div>
          </div>
        </div>
      </a>
    </div>
    <div class="column">
      <a class="block background-sheer mf-bg4" href="#">
        <div class="text-center background-blue">
          <div class="callout no-margin background-primary" data-equalizer-watch="upper">
            <p><svg aria-hidden="true" width="75px" height="75px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.st0{fill:#447BBD;stroke:#FFFFFF;stroke-width:0.6229;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#FFFFFF;stroke-width:0.623;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st2{fill:none;stroke:#FFFFFF;stroke-width:0.623;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="Outline_Icons"><circle class="st0" cx="12" cy="12" r="11.5"/><path class="st1" d="M3.4 17.5h17.2"/><path class="st1" d="M3.6 11.4l7.3-1.2"/><path class="st2" d="M4.9 11.2v6.3"/><path class="st1" d="M9.8 7.3L15 4.1l5.2 3.2"/><path class="st2" d="M19.1 6.6v10.9"/><path class="st1" d="M12.4 14.5h5.2v3h-5.2z"/><path class="st1" d="M15.3 14.5v3"/><path class="st1" d="M6.4 13.2h3v4.3h-3z"/><path class="st1" d="M6.4 12h3"/><path class="st2" d="M10.9 6.7v10.8"/><path class="st1" d="M12.4 11.2h5.2v1.9h-5.2z"/><path class="st1" d="M12.4 7.7h5.2v1.9h-5.2z"/></g></svg></p>
            <h3>Seniors Housing</h3>
          </div>
          <div class="callout chevron-base" data-equalizer-watch="lower">
            <p class="enlarge">Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
            <div class="chevron"></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

---

## Investment Deals Blocks

```html
<div class="column">
  <a class="block" href="#">
    <div class="callout large background-concrete" data-equalizer-watch>
      <div class="icon-deal-marker large">
        <div class="media-object collapse align-middle">
          <div class="media-object-section">
            <div class="marker background-yellow">K</div> 
          </div>
          <div class="media-object-section">
            Deals <svg aria-hidden="true" height="0.7em" width="0.7em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M12 22l10-10L12 2M2 22l10-10L2 2"/></svg>
          </div>
        </div>
      </div>
      <p>Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
    </div>
  </a>
</div>
```

<div class="row medium-up-2 xlarge-up-3" data-equalizer data-equalize-by-row="true">
  <div class="column">
    <a class="block" href="#">
      <div class="callout large background-concrete" data-equalizer-watch>
        <div class="icon-deal-marker large">
          <div class="media-object collapse align-middle">
            <div class="media-object-section">
              <div class="marker background-yellow">K</div> 
            </div>
            <div class="media-object-section">
              Deals <svg aria-hidden="true" height="0.7em" width="0.7em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M12 22l10-10L12 2M2 22l10-10L2 2"/></svg>
            </div>
          </div>
        </div>
        <p>Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
      </div>
    </a>
  </div>
  <div class="column">
    <a class="block" href="#">
      <div class="callout large background-concrete" data-equalizer-watch>
        <div class="icon-deal-marker large">
          <div class="media-object collapse align-middle">
            <div class="media-object-section">
              <div class="marker background-green">KT</div> 
            </div>
            <div class="media-object-section">
              Deals <svg aria-hidden="true" height="0.7em" width="0.7em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M12 22l10-10L12 2M2 22l10-10L2 2"/></svg> 
            </div>
          </div>
        </div>
        <p>Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
      </div>
    </a>
  </div>
  <div class="column">
    <a class="block" href="#">
      <div class="callout large background-concrete" data-equalizer-watch>
        <div class="icon-deal-marker large">
          <div class="media-object collapse align-middle">
            <div class="media-object-section">
              <div class="marker background-orange">SB</div> 
            </div>
            <div class="media-object-section">
              Deals <svg aria-hidden="true" height="0.7em" width="0.7em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M12 22l10-10L12 2M2 22l10-10L2 2"/></svg> 
            </div>
          </div>
        </div>
        <p>Lorem ipsum sed ut perspiciatis unde omnis enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Proin sociis natoque. </p>
      </div>
    </a>
  </div>
</div>



# Featured Posts

## Featured News

On the News landing page and the Customer News page, the first entry is featured with different styling to make them more prominent.  The featured posts are generated dynamically.

```html
<div class="gutter-bottom">
  <div class="callout large background-green news-featured">
    <div class="article-date-lg">September 06, 2017</div>
    <div class="media-object blurb3-leads-image2 stack-for-small">
      <div class="media-object-section">
         <h2><a href="#">Most in Industry Optimistic about Multifamily</a></h2>
        <p>How do lenders, developers, builders and investors feel about the market and where it is going? </p>
        <p><a href="#" class="button hollow">Read More</a></p>
      </div>
      <div class="media-object-section">
        <a class="block" href="#"><img alt="" src="/images/multifamily/cn_optimistic.jpg"></a>
      </div>
    </div>
  </div>   
</div>   
```

<div class="two-column-layout">
  <div class="row two-column-row">
    <main class="column">  
      <div class="callout large background-green news-featured">
        <div class="article-date-lg">September 06, 2017</div>
        <div class="media-object blurb3-leads-image2 stack-for-small">
          <div class="media-object-section">
             <h2><a href="#">Most in Industry Optimistic about Multifamily</a></h2>
            <p>How do lenders, developers, builders and investors feel about the market and where it is going? </p>
            <p><a href="#" class="button hollow">Read More</a></p>
          </div>
          <div class="media-object-section">
            <a class="block" href="#"><img alt="" src="/images/multifamily/cn_optimistic.jpg"></a>
          </div>
        </div>
      </div> 
    </main>
  </div>
</div>

---

## Featured Viewpoints

On the viewpoints landing page, the first 2 entries are featured with large images and different styling to make them more prominent. The featured posts are generated dynamically.

```html_example
<div class="row"> 
  <div class="large-10 large-centered xlarge-12 column">
    <div class="row xlarge-up-2">
      <div class="column">
        <div class="card feature-block">
          <a href="#" class="overlay overlay-gradient block">
            <img src="http://www.freddiemac.com/perspectives/images/authors/EP_Steve_Guggenmos-feature.jpg" alt="Steve Guggenmos"/>
            <div class="overlay-contents">
              <div class="article-date-feature">July 26, 2017</div>
              <h3 class="feature-subtitle">Outlook Remains Positive for the Remainder of 2017</h3>
              <p class="article-blurb-lg">Through the first half of 2017, the economy's growth continued to support strong multifamily fundamentals, while the market continued to moderate on a national level.</p>
              <div class="article-byline"><strong class="uppercase">Steve Guggenmos</strong><br><span class="reduce">VP Multifamily Research and Modeling</span></div>
            </div>
          </a>
        </div>
      </div>
      <div class="column">
        <div class="card feature-block">
          <a href="#" class="overlay overlay-gradient block">
            <img src="http://www.freddiemac.com/perspectives/images/authors/EP_Stephen_Johnson-feature.jpg" alt="Stephen Johnson"/>
            <div class="overlay-contents">
              <div class="article-date-feature">March 29, 2017</div>
              <h3 class="feature-subtitle">Five Tips to Get the Most Cash Out of Your Small Rental Property</h3>
              <p class="article-blurb-lg">If you own a small multifamily property, it's good to be a landlord right now. For the better part of a decade, the multifamily market has been delivering lower vacancies and higher rent growth.</p>
              <div class="article-byline"><strong class="uppercase">Stephen Johnson</strong><br><span class="reduce">VP Multifamily Small Balance Loan Business</span></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```



# Labels

<p class="lead">Labels are <strong>static</strong> text markers used to provide additional categorization or grouping.</p>

Add the `.label` class and any of the <a href="styleguide_fm.html#colors">background color classes</a> to an element to create a label. Labels with dark backgrounds will typically include class `.upperclass` and class `.weight-bold`.

<strong>Warning:</strong> Do not combine `.label` with links, buttons, or elements that are interactive.  

```html_example
<div class="row medium-up-2 large-up-4">
  <div class="column">
    <div class="card primary background-concrete"> 
      <span class="background-green label uppercase weight-bold">Green Label</span>
      <div class="card-divider weight-medium">
        <p class="grid-block-text snug">Card Text 1</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card primary background-concrete"> 
      <span class="background-primary label uppercase weight-bold">Primary Label</span>
      <div class="card-divider weight-medium">
        <p class="grid-block-text snug">Card Text 2</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card primary background-concrete"> 
      <span class="background-blue label uppercase weight-bold">Blue Label</span>
      <div class="card-divider weight-medium">
        <p class="grid-block-text snug">Card Text 3</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card primary background-concrete"> 
      <span class="background-teal label uppercase weight-bold">Teal Label</span>
      <div class="card-divider weight-medium">
        <p class="grid-block-text snug">Card Text 4</p>
      </div>
    </div>
  </div>
</div>
```



# Data Tables

<p class="lead">Standard tables should follow the <a href="styleguide_fm.html#data-tables">FM Global table design</a>.</p>

---

## AIMI Sidebar Tables

News landing page has a custom styled table, which can be achieved by applying class `.research-table` to the table, and `.background-purple` to the `th` tags.

```html
<section class="sidebar background-gray">
  <div class="row">
    <div class="column">
      <h2>Apartment Investment Market Index (AIMI)</h2>
      <table class="research-table no-border">
        <thead>
          <tr>
            <th colspan="2" class="text-center uppercase background-purple no-border">National Index <span class="weight-light">– q1 2017</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center"><span class="reduce uppercase">This quarter</span><br>
              <span class="stat-sm">102.4</span><br>
            </td>
            <td class="text-center"><span class="reduce uppercase">Quarterly change</span><br>
              <span class="stat-sm">5.1%</span><br>
            </td>
          </tr>
          <tr>
            <td class="text-center"><span class="reduce uppercase">Annual change</span><br>
              <span class="stat-sm">4.3%</span><br>
            </td>
            <td class="text-center"><span class="reduce uppercase">% from average</span><br>
              <span class="stat-sm">7.4%</span><br>
            </td>
          </tr>
        </tbody>
      </table> 
      <p class="flex-up"><a href="#">View how the index has <span class="icon-chevron-right-white">changed</span></a></p>
    </div>
  </div>
</section>
```

<div class="two-column-layout">
  <div class="row two-column-row"> 
    <aside class="column">  
      <section class="sidebar background-gray">
        <div class="row">
          <div class="column">
            <h2>Apartment Investment Market Index (AIMI)</h2>
            <table class="research-table no-border">
              <thead>
                <tr>
                  <th colspan="2" class="text-center uppercase background-purple no-border">National Index <span class="weight-light">– q1 2017</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center"><span class="reduce uppercase">This quarter</span><br>
                    <span class="stat-sm">102.4</span><br>
                  </td>
                  <td class="text-center"><span class="reduce uppercase">Quarterly change</span><br>
                    <span class="stat-sm">5.1%</span><br>
                  </td>
                </tr>
                <tr>
                  <td class="text-center"><span class="reduce uppercase">Annual change</span><br>
                    <span class="stat-sm">4.3%</span><br>
                  </td>
                  <td class="text-center"><span class="reduce uppercase">% from average</span><br>
                    <span class="stat-sm">7.4%</span><br>
                  </td>
                </tr>
              </tbody>
            </table> 
            <p class="flex-up"><a href="/multifamily/aimi/">View how the index has <span class="icon-chevron-right-white">changed</span></a></p>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>



# Footer

**Note:** The footer will automatically be inserted via the template - and will be unique for each of the 4 business lines. Do not include this code in your page.

<footer class="footer hide-for-print">
	<div class="row column">
		<div class="footer-top gutter-left gutter-right">
      <ul class="no-bullet enlarge">
				<li><a href="#">Careers</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><span class="show-for-sr">Follow us on social media</span>
          <a aria-label="YouTube" href="https://www.youtube.com/freddiemac" class="connect-link"><svg aria-hidden="true" viewBox="8 8 125 125" xmlns="http://www.w3.org/2000/svg"><path d="M72 14.2C40.1 14.2 14.2 40.1 14.2 72c0 31.9 25.9 57.8 57.8 57.8 31.9 0 57.8-25.9 57.8-57.8C129.9 40.1 104 14.2 72 14.2zM104.4 85c0 4.4-3.6 8.1-8 8.1 0 0-6.9 1-24.7 1 -18 0-24.3-1-24.3-1 -4.4 0-8.1-3.6-8.1-8V58.5c0-4.4 3.6-8 8.1-8 0 0 6.3-1 24.3-1 17.9 0 24.8 1 24.8 1 4.4 0 8 3.6 8 8.1V85z" fill="#fff"/><polygon points="62 84.5 84 71.8 62 59.1 " fill="#fff"/></svg></a>
          <a aria-label="Facebook" href="https://www.facebook.com/FreddieMac" class="connect-link"><svg aria-hidden="true" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M29.8 50.3h6.7V34h4.5l0.6-5.6h-5.1l0-2.8c0-1.5 0.1-2.3 2.2-2.3h2.8V17.7h-4.5c-5.4 0-7.3 2.7-7.3 7.3v3.4h-3.4v5.6h3.4V50.3zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64z" fill="#fff"/></svg></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/company/3140" class="connect-link"><svg aria-hidden="true" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M50.8 48.1V36.4c0-6.3-3.3-9.2-7.8-9.2 -3.6 0-5.2 2-6.1 3.4V27.7h-6.8c0.1 1.9 0 20.4 0 20.4h6.8V36.7c0-0.6 0-1.2 0.2-1.7 0.5-1.2 1.6-2.5 3.5-2.5 2.5 0 3.4 1.9 3.4 4.6v10.9H50.8zM23 24.9c2.4 0 3.8-1.6 3.8-3.5 0-2-1.5-3.5-3.8-3.5s-3.8 1.5-3.8 3.5c0 2 1.5 3.5 3.8 3.5H23zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64zM26.4 48.1V27.7h-6.8v20.4H26.4z" fill="#fff"/></svg></a>
          <a aria-label="Twitter" href="https://twitter.com/FreddieMac" class="connect-link"><svg aria-hidden="true" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M38.2 22.3c-2.6 1-4.3 3.4-4.1 6.1l0.1 1 -1-0.1c-3.8-0.5-7.1-2.1-10-4.9l-1.4-1.4 -0.4 1c-0.8 2.3-0.3 4.7 1.3 6.3 0.8 0.9 0.6 1-0.8 0.5 -0.5-0.2-0.9-0.3-1-0.2 -0.1 0.1 0.4 2.1 0.8 2.8 0.5 1.1 1.7 2.1 2.9 2.7l1 0.5 -1.2 0c-1.2 0-1.2 0-1.1 0.5 0.4 1.4 2.1 2.8 3.9 3.5l1.3 0.4 -1.1 0.7c-1.7 1-3.6 1.5-5.6 1.6C20.8 43.3 20 43.3 20 43.4c0 0.2 2.6 1.4 4 1.9 4.5 1.4 9.8 0.8 13.7-1.6 2.8-1.7 5.7-5 7-8.2 0.7-1.7 1.4-4.9 1.4-6.4 0-1 0.1-1.1 1.2-2.3 0.7-0.7 1.3-1.4 1.5-1.6 0.2-0.4 0.2-0.4-0.9 0 -1.8 0.6-2 0.6-1.2-0.4 0.6-0.7 1.4-1.9 1.4-2.3 0-0.1-0.3 0-0.7 0.2 -0.4 0.2-1.2 0.5-1.8 0.7l-1.1 0.4 -1-0.7c-0.6-0.4-1.4-0.8-1.8-0.9C40.8 21.9 39.1 21.9 38.2 22.3zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64z" fill="#fff"/></svg></a>
        </li>
			</ul>
		</div>
		<div class="footer-bottom reduce gutter-left gutter-right">
      <ul class="no-bullet">
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li>&copy; 2017 Freddie Mac</li>
      </ul>
    </div>
	</div>
</footer><div class="footer-bottom-edge"></div>

---

