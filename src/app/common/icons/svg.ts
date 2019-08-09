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

export const brxIconDashboard = new SvgIcon(`
<svg width="17px" height="18px" viewBox="0 0 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Menu/MainNav/MijnUren" transform="translate(-72.000000, -17.000000)">
            <g id="Group-2" transform="translate(0.000000, -20.000000)">
                <g id="Group-61" transform="translate(72.000000, 38.000000)">
                    <path d="M12.7783,13.9009 L8.8733,8.1519 L15.3483,5.6299 C15.6033,6.3739 15.7433,7.1709 15.7433,7.9999 C15.7433,10.4129 14.5763,12.5579 12.7783,13.9009 M8.3823,15.3599 C4.3253,15.3599 1.0233,12.0589 1.0233,7.9999 C1.0233,4.0489 4.1533,0.8169 8.0633,0.6489 L8.0633,8.0989 L12.2483,14.2599 C11.1243,14.9569 9.7993,15.3599 8.3823,15.3599 M15.1163,5.0329 L8.7033,7.5319 L8.7033,0.6489 C11.5693,0.7719 14.0133,2.5409 15.1163,5.0329 M16.3833,7.9999 C16.3833,3.6899 12.9723,0.1759 8.7033,0.0079 L8.7033,-0.0001 L8.0633,-0.0001 L8.0633,0.0079 C3.7943,0.1759 0.3823,3.6899 0.3823,7.9999 C0.3823,12.4189 3.9653,15.9999 8.3823,15.9999 C9.9353,15.9999 11.3823,15.5569 12.6093,14.7919 L12.6143,14.7979 L12.8523,14.6359 C12.8553,14.6339 12.8573,14.6329 12.8603,14.6309 L13.1433,14.4389 L13.1383,14.4329 C15.1073,12.9759 16.3833,10.6369 16.3833,7.9999" id="Fill-57" fill="#FFFFFF"></path>
                    <path d="M12.7783,13.9009 L8.8733,8.1519 L15.3483,5.6299 C15.6033,6.3739 15.7433,7.1709 15.7433,7.9999 C15.7433,10.4129 14.5763,12.5579 12.7783,13.9009 Z M8.3823,15.3599 C4.3253,15.3599 1.0233,12.0589 1.0233,7.9999 C1.0233,4.0489 4.1533,0.8169 8.0633,0.6489 L8.0633,8.0989 L12.2483,14.2599 C11.1243,14.9569 9.7993,15.3599 8.3823,15.3599 Z M15.1163,5.0329 L8.7033,7.5319 L8.7033,0.6489 C11.5693,0.7719 14.0133,2.5409 15.1163,5.0329 Z M16.3833,7.9999 C16.3833,3.6899 12.9723,0.1759 8.7033,0.0079 L8.7033,-0.0001 L8.0633,-0.0001 L8.0633,0.0079 C3.7943,0.1759 0.3823,3.6899 0.3823,7.9999 C0.3823,12.4189 3.9653,15.9999 8.3823,15.9999 C9.9353,15.9999 11.3823,15.5569 12.6093,14.7919 L12.6143,14.7979 L12.8523,14.6359 C12.8553,14.6339 12.8573,14.6329 12.8603,14.6309 L13.1433,14.4389 L13.1383,14.4329 C15.1073,12.9759 16.3833,10.6369 16.3833,7.9999 Z" id="Stroke-59" stroke="#FFFFFF" stroke-width="0.25"></path>
                </g>
            </g>
        </g>
    </g>
</svg>`);

export const brxIconProjectLight = new SvgIcon(`
<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Generator: Sketch 56.2 (81672) - https://sketch.com -->
  <title>Icon/ProjectLight</title>
  <desc>Created with Sketch.</desc>
  <g id="Icon/ProjectLight" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle-5" fill="#FFFFFF" x="0" y="5" width="14" height="1"></rect>
    <path d="M13.5,4.5 L13.5,12.5 C13.5,13.0522847 13.0522847,13.5 12.5,13.5 L1.5,13.5 C0.94771525,13.5 0.5,13.0522847 0.5,12.5 L0.5,2.5 C0.5,1.94771525 0.94771525,1.5 1.5,1.5 L4.5,1.5 C5.05228475,1.5 5.5,1.94771525 5.5,2.5 L5.5,3.5 L12.5,3.5 C13.0522847,3.5 13.5,3.94771525 13.5,4.5 Z" id="Path-2" stroke="#FFFFFF"></path>
  </g>
</svg>
`);

export const brxIconClientLight = new SvgIcon(`
<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 56.2 (81672) - https://sketch.com -->
    <title>Icon/ClientLight</title>
    <desc>Created with Sketch.</desc>
    <g id="Icon/ClientLight" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-2" transform="translate(-0.500000, 1.000000)" stroke="#FFFFFF">
            <path d="M11.7601199,3.88160708 C11.5504811,4.22742964 10.9770215,4.79057713 10.0687305,4.6951119 C9.16043956,4.59964667 7.65769223,4.63451696 7.14510947,5.3104992 C6.63252671,5.98648144 4.8017861,5.41309773 4.85569075,4.90022927 C4.90959539,4.3873608 5.99740081,2.72188681 7.14193426,2.51816589 C8.2864677,2.31444496 9.33922053,2.09652127 9.54042638,1.97209912 C9.67456362,1.88915102 10.219003,1.47228997 11.1737445,0.721515976 L14.1528619,4.55923265 C13.230915,5.19756808 12.6844044,5.58461811 12.5133301,5.72038275 C12.2567187,5.9240297 11.4338526,7.16476148 11.3934635,7.3701098" id="Path-4" transform="translate(9.503693, 4.045813) rotate(-6.000000) translate(-9.503693, -4.045813) "></path>
            <path d="M6.2238094,3.12092906 L3.84610361,1.34010931 L0.913279845,5.00669209 C1.86236779,5.70195323 2.42967358,6.12994286 2.61519722,6.29066097 C2.89348267,6.53173813 3.55709456,8.47935597 4.09827687,8.97963603 C4.63945918,9.4799161 6.05430146,10.5002928 6.708286,11.0000338 C7.36227055,11.4997748 9.69707981,10.9237123 10.5880017,10.117281 C11.4789235,9.31084972 12.8122303,7.79608157 11.8408153,6.8857178 L8.3824819,4.4843946" id="Path-3" transform="translate(6.546742, 6.263317) rotate(4.000000) translate(-6.546742, -6.263317) "></path>
        </g>
    </g>
</svg>`);

// export const brxIconClientLight = new SvgIcon();
