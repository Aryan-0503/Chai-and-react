const mainContainer = document.querySelector("#root");

function custromRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (i in reactElement.props) {
    if (i === "children") continue;
    domElement.setAttribute(i, reactElement.props[i]);
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

custromRender(reactElement, mainContainer);
