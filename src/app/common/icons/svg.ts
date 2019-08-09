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

export const brxIconResize = new SvgIcon(`
      <svg width="12px" class="brx-icon-resize" height="7px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
export const brxIconEdit = new SvgIcon(`
      <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
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

export const brxIconJob = new SvgIcon(`
      <svg width="13px" height="14px" viewBox="0 0 13 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Agenda/Basis" transform="translate(-1344.000000, -87.000000)">
                  <g id="Group-4" transform="translate(1325.000000, 64.000000)">
                      <g id="Group-3" transform="translate(14.000000, 19.000000)">
                          <g id="Icon/JobLight" transform="translate(4.000000, 4.000000)">
                              <circle id="Oval" stroke="#FFFFFF" stroke-width="1.5" cx="7" cy="8" r="5.25"></circle>
                              <polygon id="Rectangle" fill="#FFFFFF" fill-rule="evenodd" points="9 0 9 1 7.66666667 1 6.33333333 1 5 1 5 0"></polygon>
                              <rect id="Rectangle-2" fill="#FFFFFF" fill-rule="evenodd" transform="translate(11.444544, 3.444544) rotate(45.000000) translate(-11.444544, -3.444544) " x="10.4445436" y="1.69454365" width="2" height="3.5"></rect>
                              <rect id="Rectangle-3" fill="#FFFFFF" fill-rule="evenodd" x="6" y="5" width="2" height="3"></rect>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </svg>`);

export const brxIconClose = new SvgIcon(`
      <svg width="14px" height="12px" viewBox="0 0 14 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Icon/Close" transform="translate(0.000000, -1.000000)" stroke="#424242">
                  <g id="Group" transform="translate(1.000000, 1.000000)">
                      <path d="M0,0 L12,12" id="Stroke-29"></path>
                      <path d="M12,0 L0,12" id="Stroke-31"></path>
                  </g>
              </g>
          </g>
      </svg>`);

export const brxIconWarningLight = new SvgIcon(`
      <svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Icon/WarningLight" transform="translate(0.000000, -1.000000)">
                  <g id="Group" transform="translate(0.000000, 1.000000)">
                      <path d="M6.5,1.0497957 L0.839472669,11.5 L12.1605273,11.5 L6.5,1.0497957 Z" id="Triangle" stroke="#FFFFFF"></path>
                      <rect id="Rectangle" fill="#FFFFFF" x="6" y="5" width="1" height="3"></rect>
                      <rect id="Rectangle-2" fill="#FFFFFF" x="6" y="9" width="1" height="1"></rect>
                  </g>
              </g>
          </g>
      </svg>`);
