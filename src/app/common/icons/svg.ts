export class SvgIcon {
  asString: string;
  asNode;

  constructor(htmlString: string) {
    this.asString = htmlString;
    this.asNode = (): Node => this.createElementFromHTML(htmlString);
  }

  private createElementFromHTML(htmlString): Node {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

  toString() {
    return this.asString;
  }
}

export const brxIconResize = new SvgIcon(`<svg width="12px"
      class="brx-icon-resize"
      height="7px"
      viewBox="0 0 12 7"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" class="brx-icon-resize">
          <g transform="translate(-337.000000, -655.000000)" fill="#F7F7F7" class="brx-icon-resize">
            <g transform="translate(251.000000, 593.000000)" class="brx-icon-resize">
              <g transform="translate(86.000000, 62.000000)" class="brx-icon-resize">
                <rect x="0" y="0" width="12" height="1" class="brx-icon-resize"></rect>
                <rect x="0" y="3" width="12" height="1" class="brx-icon-resize"></rect>
                <rect x="0" y="6" width="12" height="1" class="brx-icon-resize"></rect>
              </g>
            </g>
          </g>
        </g>
      </svg>`);
//
export const brxIconEdit = new SvgIcon(`<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Icon/EditLight" transform="translate(1.000000, 0.000000)" stroke="#FFFFFF">
            <g id="Group" transform="translate(0.375252, 1.122836)">
              <path d="M12.1349831,3.12716448 L3.74239482,11.4081645 L-8.8817842e-16,12.6339184 L1.27180658,8.97066448 L9.66439482,0.689664479 C11.5784242,-1.17183106 14.1821926,1.10679618 12.1349831,3.12716448 Z"
                id="Stroke-6">
              </path>
              <path d="M3.74239482,11.2521645 C3.74239482,9.90422698 2.63721835,8.81466448 1.27180658,8.81466448" id="Stroke-9"></path>
              <path d="M9.16662971,1.12353536 L11.7602866,3.70861837" id="Stroke-11"></path>
            </g>
          </g>
        </g>
      </svg>`);

