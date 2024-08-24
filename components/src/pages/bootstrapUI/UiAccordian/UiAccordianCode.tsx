import PrismCode from "Common/Prisam";

// Default Accordion

const defaultAccordionCode =
`<!-- Base Example -->
<Accordion defaultActiveKey="0">
<Accordion.Item eventKey="0">
    <Accordion.Header id="headingOne">
        How to create a group booking ?
    </Accordion.Header>
    <Accordion.Body>
            Although you probably won’t get into any legal trouble if you do it just once, why risk it? If you made your subscribers a promise, you should honor that. If not, you run the risk of a drastic increase in opt outs, which will only hurt you in the long run.
    </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
    <Accordion.Header id="headingTwo">
        Why do we use it ?
    </Accordion.Header>
    <Accordion.Body>
        No charges are put in place by SlickText when subscribers join your text list. This does not mean however that charges 100% will not occur. Charges that may occur fall under part of the compliance statement stating "Message and Data rates may apply."
    </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
    <Accordion.Header id="headingThree">
        Where does it come from ?
    </Accordion.Header>
    <Accordion.Body>
        Now that you have a general idea of the amount of texts you will need per month, simply find a plan size that allows you to have this allotment, plus some extra for growth. Don't worry, there are no mistakes to be made here. You can always upgrade and downgrade.
    </Accordion.Body>
</Accordion.Item>
</Accordion>
`;

const DefaultAccordionExample = () => (
    <PrismCode
        code={defaultAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Accordion Flush
const flushAccordionCode =
    `
<!-- Accordion Flush Example -->
<Accordion className="accordion-flush" defaultActiveKey="0">
    <Accordion.Item eventKey='0'>
        <Accordion.Header id="flush-headingOne">
            How do I set up my profile ?
        </Accordion.Header>
        <Accordion.Body>
            The renewal of your SlickText service happens on the anniversary of your original paid sign up date. Upgrading in the middle of your billing period will not change the billing date. Upgrading does however force an immediate, pro-rated charge to take place on your account.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='1'>
        <Accordion.Header id="flush-headingTwo">
            What can I do with my project ?
        </Accordion.Header>
        <Accordion.Body>
            If you had signed up on a free account with Slicktext, then upgraded to a paid plan at a later date, your bill will renew based on the date you had upgraded to a paid plan. All invoices are able to be viewed under your plan options in your SlickText account.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
        <Accordion.Header id="flush-headingThree">
            Where can I go to edit voice settings
        </Accordion.Header>
        <Accordion.Body>
            No, we cannot provide this information. Opting out from a list is an anonymous, private act. This prevents further harassment. Providing this information is considered bad practice, and further communication after they opt out would be considered against compliance.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`;

const FlushAccordionExample = () => (
    <PrismCode
        code={flushAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Accordions with Icons
const iconAccordionCode =
    `
<!-- Accordions with Icons -->
<Accordion defaultActiveKey='0' className='custom-accordionwithicon accordion-secondary'>
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
            <i className="ri-global-line me-2"></i> How Does Age Verification Work?
        </Accordion.Header>
        <Accordion.Body>
            Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='1'>
        <Accordion.Header>
            <i className="ri-user-location-line me-2"></i> How Does Link Tracking Work?
        </Accordion.Header>
        <Accordion.Body>
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
        <Accordion.Header>
            <i className="ri-pen-nib-line me-2"></i> How Do I Set Up the Drip Feature?
        </Accordion.Header>
        <Accordion.Body>
            Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`;

const IconAccordionExample = () => (
    <PrismCode
        code={iconAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Accordions without Icons
const withIconAccordionCode =
    `
<!-- Accordions without Icons -->
<Accordion defaultActiveKey='0'>
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
            <i className="ri-global-line me-2"></i> How Does Age Verification Work?
        </Accordion.Header>
        <Accordion.Body>
            Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. For that very reason, I went on a quest and spoke to many different professional graphic designers.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='1'>
        <Accordion.Header>
            <i className="ri-user-location-line me-2"></i> How Does Link Tracking Work?
        </Accordion.Header>
        <div id="accor_withouticoncollapse2" className="accordion-collapse collapse" aria-labelledby="accordionwithouticonExample2" data-bs-parent="#accordionWithouticon">
            <div className="accordion-body">
                When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown.
            </div>
        </div>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
        <Accordion.Header>
            <i className="ri-pen-nib-line me-2"></i> How Do I Set Up the Drip Feature?
        </Accordion.Header>
        <Accordion.Body>
            <Accordion.Body>
                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
            </Accordion.Body>
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`;

const WithIconAccordionExample = () => (
    <PrismCode
        code={withIconAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Accordions with Plus Icon
const plusIconAccordionCode =
    `
<!-- Accordions with Plus Icon -->
<Accordion defaultActiveKey="0">
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
            What is User Interface Design?
        </Accordion.Header>
        <Accordion.Body>
            Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='1'>
        <Accordion.Header>
            What is Digital Marketing?
        </Accordion.Header>
        <Accordion.Body>
            It makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. commodo enim craft beer mlkshk aliquip jean shorts ullamco.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
        <Accordion.Header>
            Where does it come from ?
        </Accordion.Header>
        <Accordion.Body>
            Spacing depending on the situation and try, try again until it looks right, and each. next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco. omo nostrud organic, assumenda labore aesthetic magna delectus. pposites attract, and that’s a fact.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`;

const PlusIconAccordionExample = () => (
    <PrismCode
        code={plusIconAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Left Icon Accordions
const leftIconAccordionCode =
    `
<!-- Left Icon Accordions -->
<Accordion>
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
            What is User Interface Design?
        </Accordion.Header>
        <Accordion.Body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla assumenda shoreditch et.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='1'>
        <Accordion.Header>
            What is Digital Marketing?
        </Accordion.Header>
        <Accordion.Body>
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
        <Accordion.Header>
            Where does it come from ?
        </Accordion.Header>
        <Accordion.Body>
            Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`;

const LeftIconAccordionExample = () => (
    <PrismCode
        code={leftIconAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Accordions Bordered
const borderedAccordionCode =
    `
<!-- Accordions Bordered -->
<Accordion defaultActiveKey='0' className="custom-accordion-border accordion-border-box accordion-success">
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
            What is User Interface Design?
        </Accordion.Header>
        <Accordion.Body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla assumenda shoreditch et.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='1'>
        <Accordion.Header>
            What is Digital Marketing?
        </Accordion.Header>
        <Accordion.Body>
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
        <Accordion.Header>
            Where does it come from ?
        </Accordion.Header>
        <Accordion.Body>
            Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`;

const BorderedAccordionExample = () => (
    <PrismCode
        code={borderedAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Nesting Accordions
const nestingAccordionCode =
`
<Accordion >
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
            How Do I Add Contacts/Subscribers?
        </Accordion.Header>
        <Accordion.Body>
            This opt in method is perfect for those looking to integrate a different software such Shopify or Hubspot with Slicktext. For example, upon cashing out online, a subscriber may submit to have their mobile number to receive marketing messages. The API will pass this information from said software over to Slicktext via API integration.
                <Accordion>
                    <Accordion.Item eventKey='1'> 
                        <Accordion.Header>
                            How Do I Search For Contacts?
                        </Accordion.Header>
                        <Accordion.Body>
                            When you are in need of finding a specific subscriber, you will want to use the help of SlickText's search navigation tool, located under the Contacts tab of your Slicktext account. Once here, you will have options to sort by, filter, and search your contacts.
                                <Accordion>
                                    <Accordion.Item eventKey='2'>
                                        <Accordion.Header className="accordion-header" id="accordionnesting4Example2">
                                            How do I reset my digital tide watch ?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>
                            How Do I Delete a Contact From My List?
                        </Accordion.Header>
                        <Accordion.Body>
                            Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='4'>
        <Accordion.Header>
            How Does Personalization Work?
        </Accordion.Header>
            <Accordion.Body>
                Personalization allows you to provide a personal touch to your outbound text marketing campaigns. SlickText uses merge tags as placeholders that are replaced with contact-specific information when a text message is sent. These merge tags may also be known as personalization fields.
                <Accordion>
                    <Accordion.Item eventKey='5'>
                        <Accordion.Header>
                            Howe does temperature impact my watch?
                        </Accordion.Header>
                        <Accordion.Body>
                            Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='6'>
        <Accordion.Header>
            What Happens When I Run Out of Messages?
        </Accordion.Header>
        <Accordion.Body>
            When you run out of messages, you will not be able to send any outbound campaigns. This would include any scheduled messages, drip campaigns, and birthday messages. However, we will continue to deliver your auto-reply messages to allow your subscriber list to continue to grow.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`;

const NestingAccordionExample = () => (
    <PrismCode
        code={nestingAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Accordions Fill Colored
const fillColoredAccordionCode =
`
<Accordion defaultActiveKey='0' className="accordion-fill-success">
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
            What are webhooks?
        </Accordion.Header>
        <Accordion.Body>
            Webhooks allow you to gather real time data on key interactions that happen with your Slick Text account. Simply provide us with a url where you'd like the data to be sent, choose which events you'd like to be informed of, and click save.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='1'>
        <Accordion.Header>
            Where can I find my Textword ID?
        </Accordion.Header>
        <Accordion.Body>
            Head over to the Textwords page. Click options on the right hand side, and then click Settings. This will redirect you to your Textword Setting page. Now, go check your url, and the textword ID will be the number after "word=". Too much or too little spacing, as in the example below.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
        <Accordion.Header>
            Where is your API documentation?
        </Accordion.Header>
        <Accordion.Body>
            You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey='0' className="accordion-fill-secondary">
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
            How Does Age Verification Work?
        </Accordion.Header>
        <Accordion.Body>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='1'>
        <Accordion.Header>
            What Kind of List Growth Should I Expect?
        </Accordion.Header>
        <Accordion.Body>
            Consistency is the one thing that can take all of the different elements in your design, and tie them all together and make them work. In an awareness campaign, it is vital for people to begin put 2 and 2 together and begin to recognize your cause. Consistency piques people’s interest.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
        <Accordion.Header>
            How Do I Delete a Contact From My List?
        </Accordion.Header>
        <Accordion.Body>
            Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`;

const FillColoredAccordionExample = () => (
    <PrismCode
        code={fillColoredAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Collapse Example
const collapseCode =
    `
<!-- Collapse Example -->
<div className="hstack gap-2 flex-wrap mb-3">
    <Button variant='primary' onClick={() => setOpen(!open)}>
        Link with href
    </Button>
    <Button variant='primary' onClick={() => setOpen(!open)}>
        Button with data-bs-target
    </Button>
</div>
<Collapse in={open}>
    <div className="card mb-0">
        <Card.Body>
            When designing, the goal is to draw someone’s attention and portray to them what you’re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive.
        </Card.Body>
    </div>
</Collapse>
`;

const CollapseExample = () => (
    <PrismCode
        code={collapseCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Horizontal Collapse
const horizontalCollapseCode =
    `
<!-- Horizontal Collapse -->
<div className="mb-3">
    <Button variant='primary' onClick={() => setcolOpen(!colOpen)}>
        Toggle Width Collapse
    </Button>
</div>
<Collapse in={colOpen} dimension="width">
    <div id='example-collapse-text'>
        <Card body className="mb-0" style={{width: "300px"}}>
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
        </Card>
    </div>
</Collapse>
`;

const HorizontalCollapseExample = () => (
    <PrismCode
        code={horizontalCollapseCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Collapse with Icon
const iconCollapseCode =
    `
<!-- Collapse with Icon -->
<div className="hstack gap-3 mb-3">
    <Link className="link-success" onClick={() => seticonCol(!iconCol)}>
        <i className="ri-arrow-down-circle-line fs-16"></i>
    </Link>
    <Button variant='light' onClick={() => seticonCol2(!iconCol2)}>
        <i className="ri-filter-2-line"></i>
    </Button>
</div>
<Collapse in={iconCol}>
    <Card className="mb-0">
        <Card.Body>
            If you enter text including symbols in the search criteria, the search criteria is interpreted exactly as you entered it, and the search is case sensitive as a case insensitive search that contains certain text but does also provide a lot of search criteria options.
        </Card.Body>
    </Card>
</Collapse>
<Collapse in={iconCol2}>
    <Card className="mb-0 mt-3">
        <Card.Body>
            When you want to search for data, such as customer names, addresses, or product groups, you enter criteria. In search criteria you can use all the numbers and letters that you normally use in the specific field. In addition, you can use special symbols to further filter the results.
        </Card.Body>
    </Card>
</Collapse>
`;

const IconCollapseExample = () => (
    <PrismCode
        code={iconCollapseCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Inline & Block Element Collapse
const inlineBLockCollapseCode =
    `
<!-- Inline & Block Element Collapse -->
<div className="mb-3">
    <h6 className="text-primary" onClick={() => setblockCol(!blockCol)}>
        <code>&lt;h6&gt;</code> Inline Element Collapse
    </h6>
    <span className="text-primary" onClick={() => setblockCol2(!blockCol2)}>
        <code>&lt;span&gt;</code> Block Element Collapse
    </span>
</div>
<Row className="g-2">
    <Collapse dimension='width' in={blockCol}>
        <div className="col-auto">
            <Card body className="mb-0" style={{width: "300px"}}>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring heart.
            </Card>
        </div>
    </Collapse>
    <Collapse dimension='width' in={blockCol2} >
        <div className="col-auto">
            <Card body className="mb-0" style={{width: "300px"}}>
                When you have created a new account schedule and set up the rows, you must set up columns.
            </Card>
        </div>
    </Collapse>
</Row>
`;

const InlineBLockCollapseExample = () => (
    <PrismCode
        code={inlineBLockCollapseCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Multiple Targets Collapse
const multipleTargetCollapseCode =
`
<!-- Multiple Targets Collapse -->

    const [coll3, setcoll3] = useState(true);
    const [coll4, setcoll4] = useState(true);

    const t_coll3 = () => {
        setcoll3(!coll3);
    };

    const t_coll4 = () => {
        setcoll4(!coll4);
    };

    const t_coll5 = () => {
        setcoll3(!coll3);
        setcoll4(!coll4);
    };

<div className="hstack gap-2 flex-wrap mb-3">
    <Button variant='primary' onClick={t_coll3}>Toggle First Element</Button>
    <Button variant='primary' onClick={t_coll4}>Toggle Second Element</Button>
    <Button variant='primary' onClick={t_coll5}>Toggle Both Elements</Button>
</div>
<Row>
    <Col>
        <Collapse in={coll3}>
            <Card body className="mb-0">
                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </Card>
        </Collapse>
    </Col>
    <Col>
        <Collapse in={coll4}>
            <Card body className="mb-0">
                Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </Card>
        </Collapse>
    </Col>
</Row>
`;

const MultipleTargetCollapseExample = () => (
    <PrismCode
        code={multipleTargetCollapseCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { DefaultAccordionExample, FlushAccordionExample, IconAccordionExample, WithIconAccordionExample, PlusIconAccordionExample, LeftIconAccordionExample, BorderedAccordionExample, NestingAccordionExample, FillColoredAccordionExample, CollapseExample, HorizontalCollapseExample, IconCollapseExample, InlineBLockCollapseExample, MultipleTargetCollapseExample };