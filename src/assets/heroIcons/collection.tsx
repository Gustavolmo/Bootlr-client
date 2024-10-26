import { h } from '@stencil/core';

export const sparkles = (pxSize: string, color?: string) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="currentColor"
      width={pxSize}
      height={pxSize}
      color={color}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  );
};

export const copyToClipboard = (pxSize: string, color?: string) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      width={pxSize}
      height={pxSize}
      color={color}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
};

export const copiedSuccessfully = (pxSize: string, color?: string) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      width={pxSize}
      height={pxSize}
      color={color}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
      />
    </svg>
  );
};

export const cross = (pxSize: string, color?: string) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      width={pxSize}
      height={pxSize}
      color={color}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
};

export const dialogueBallon = (pxSize: string, color?: string) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width={1.5}
      stroke="currentColor"
      width={pxSize}
      height={pxSize}
      color={color}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
      />
    </svg>
  );
};

export const magnifyingGlass = (pxSize: string, color?: string) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      width={pxSize}
      height={pxSize}
      color={color}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};

export const bootlrIcon = (pxSize: string) => {
  return (
    <svg
      width={pxSize}
      height={pxSize}
      viewBox="0 0 1462 1902"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1206.84 891.437C1182.96 1085.26 1105.17 1253.74 998.79 1369.44C892.409 1485.16 757.578 1547.99 619.501 1530.98C481.424 1513.97 365.873 1420.29 290.754 1282.22C215.638 1144.16 181.054 961.841 204.931 768.014C228.808 574.187 306.604 405.714 412.982 290.006C519.364 174.294 654.195 111.464 792.271 128.473C930.348 145.482 1045.9 239.156 1121.02 377.227C1196.13 515.293 1230.72 697.609 1206.84 891.437Z"
        stroke="black"
        stroke-width="4"
      />
      <rect
        x="149.425"
        y="568.314"
        width="1168.49"
        height="1196.71"
        transform="rotate(7.02271 149.425 568.314)"
        fill="#FFFDF0"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M1293.59 837.486C1269.72 1031.31 1191.92 1199.79 1085.54 1315.49C979.161 1431.21 844.33 1494.04 706.254 1477.03C568.177 1460.02 452.625 1366.34 377.507 1228.27C302.39 1090.21 267.807 907.89 291.683 714.063C315.56 520.236 393.357 351.763 499.735 236.055C606.116 120.343 740.947 57.5129 879.024 74.5222C1017.1 91.5314 1132.65 185.205 1207.77 323.276C1282.89 461.342 1317.47 643.659 1293.59 837.486Z"
        stroke="black"
        stroke-width="4"
      />
      <rect
        x="236.178"
        y="514.363"
        width="1168.49"
        height="1196.71"
        transform="rotate(7.02271 236.178 514.363)"
        fill="#FFFDF0"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M834.921 1148.18C843.706 1153.77 853.889 1163.55 865.47 1177.53C877.45 1191.11 885.237 1207.88 888.831 1227.84C892.824 1247.41 891.027 1266.38 883.44 1284.75C875.853 1302.72 865.071 1319.29 851.094 1334.47C819.547 1368.41 776.618 1389.17 722.309 1396.76C684.372 1401.55 640.446 1401.55 590.529 1396.76C586.536 1396.36 584.739 1393.97 585.138 1389.57L622.276 958.294C627.068 941.123 635.454 929.342 647.434 922.953C652.226 920.557 657.218 919.559 662.409 919.958C700.346 923.552 735.088 928.544 766.635 934.933C798.182 941.322 822.342 950.707 839.114 963.086C871.061 986.647 887.433 1014.6 888.232 1046.95C888.631 1082.09 870.861 1115.83 834.921 1148.18ZM815.753 1332.67C822.941 1328.28 827.933 1324.68 830.728 1321.89C833.923 1318.69 837.517 1311.9 841.51 1301.52C845.903 1291.14 846.502 1277.96 843.307 1261.99C840.512 1245.61 831.926 1229.24 817.55 1212.87C803.573 1196.5 792.592 1187.91 784.605 1187.11C771.826 1186.31 755.853 1185.91 736.685 1185.91C717.916 1185.91 687.567 1185.12 645.637 1183.52L631.261 1351.84C715.92 1359.42 777.417 1353.03 815.753 1332.67ZM649.83 1133.2L753.457 1137.99C768.232 1138.79 781.61 1139.59 793.59 1140.39C805.171 1139.59 816.352 1133.8 827.134 1123.02C837.916 1112.24 843.107 1099.06 842.708 1083.48C841.909 1053.53 828.731 1028.98 803.174 1009.81C784.405 995.831 757.45 985.449 722.309 978.66C705.537 975.465 686.169 972.47 664.206 969.675L649.83 1133.2Z"
        fill="#A0A0A0"
      />
    </svg>
  );
};

export const errorIcon = (pxSize: string, color: string = 'black') => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      width={pxSize}
      height={pxSize}
      color={color}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
      />
    </svg>
  );
};

export const swedishFlag = (pxSize: string, opacity: number) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 10"
    height={pxSize}
    opacity={opacity}
    >
      <path fill="#006aa7" d="M0,0H16V10H0Z" />
      <path fill="#fecc00" d="M0,4H5V0H7V4H16V6H7V10H5V6H0Z" />
    </svg>
  );
};
