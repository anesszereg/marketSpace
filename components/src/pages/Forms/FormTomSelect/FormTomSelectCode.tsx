import React from 'react'
import PrismCode from 'Common/Prisam'

// Custom Option and Item HTML

const CustomOptionJsItem = () => {
  const code =
    `
  <Select
  className="basic-single"
  classNamePrefix="select"
  defaultValue={links[0]}
  name="link"
  options={links}
/>
  `
  return (
    <React.Fragment>
      <PrismCode
        code={code}
        language={"react"}
      />
    </React.Fragment>
  );
}

const CustomOptionHtmlItem = () => {
  const code =
    `
  <select id="select-links" multiple placeholder="Pick some links..."></select>
  `
  return (
    <React.Fragment>
      <PrismCode
        code={code}
        language={"react"}
      />
    </React.Fragment>
  );
}

const EmailOptionHtmlItem = () => {
  const code =

    `
<code>&lt;select id=&quot;select-to&quot; class=&quot;contacts&quot; placeholder=&quot;Pick some people...&quot;&gt;&lt;/select&gt;</code>
`
  return (
    <React.Fragment>
      <PrismCode
        code={code}
        language={"react"}
      />
    </React.Fragment>
  );
}


const EmailOptionJsItem = () => {
  const code =
    `
  <Select
    className="basic-single"
    classNamePrefix="select"
    defaultValue={emailper[0]}
    isLoading={isLoading}
    onChange={() => setIsLoading((state) => !state)}
    name="mail"
    options={emailper}
    />
  `
  return (
    <React.Fragment>
      <PrismCode
        code={code}
        language={"react"}
      />
    </React.Fragment>
  );
}

const BrowserOptionHtmlItem = () => {
  const code =
`
<form>
    <select id="select-person" placeholder="Select a person..." required>
        <option value="">Select a person...</option>
        <option value="4">Thomas Edison</option>
        <option value="1">Nikola</option>
        <option value="3">Nikola Tesla</option>
        <option value="5">Arnold Schwarzenegger</option>
    </select>
    <div class="py-3">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
`
return (
  <React.Fragment>
    <PrismCode
      code={code}
      language={"react"}
    />
  </React.Fragment>
);

}

const BrowserOptionJsItem = () => {
  const code =
    `
  <Select
    className="basic-single"
    classNamePrefix="select"
    defaultValue={emailperson[0]}
    isLoading={isLoading}
    onChange={() => setIsLoading((state) => !state)}
    name="browser"
    options={emailperson}
    />
  `
  return (
    <React.Fragment>
      <PrismCode
        code={code}
        language={"react"}
      />
    </React.Fragment>
  );
}

const BootstrapOptionHtmlItem = () => {
  const code =
`
<form id="bootstrap-form" novalidate>
    <select class="form-select" id="select-bootstrap" required placeholder="Select a person..." name="beast">
        <option value="">Select a person...</option>
        <option value="4">Thomas Edison</option>
        <option value="1">Nikola</option>
        <option value="3">Nikola Tesla</option>
        <option value="5">Arnold Schwarzenegger</option>  
    </select>
    <div class="invalid-feedback">
        Please select a person
    </div>
    <div class="py-3">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
`
return (
  <React.Fragment>
    <PrismCode
      code={code}
      language={"react"}
    />
  </React.Fragment>
);

}

const BootOptionJsItem = () => {
  const code =
    `
  <Select
    className="basic-single"
    classNamePrefix="select"
    defaultValue={bootstrap[0]}
    isLoading={isLoading}
    onChange={() => setIsLoading((state) => !state)}
    name="browser"
    options={bootstrap}
    />
  `
  return (
    <React.Fragment>
      <PrismCode
        code={code}
        language={"react"}
      />
    </React.Fragment>
  );
}


export { CustomOptionJsItem, CustomOptionHtmlItem, EmailOptionHtmlItem, EmailOptionJsItem, BrowserOptionHtmlItem, BrowserOptionJsItem, BootstrapOptionHtmlItem, BootOptionJsItem }