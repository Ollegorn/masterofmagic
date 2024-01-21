import Button from "./Button";

function EventCard({
  bgID = 1,
  title = "Event Name",
  startDate = "01.01.2024",
  endDate = "14.01.2024",
  description = "Event Description...",
  tournamentFormat = "Round Robin",
  duelMode = "Solo",
  twoWinsInThree = false,
  balancedMode = false,
  echoBan = false,
  cardBan = false,
  isRewarded = false,
  isFeatured = false,
  includeAction = false,
  buttonLabel = "Primary Action",
  onClick,
}) {
  return (
    <>
      {/** card container */}
      <div
        className={`flex w-[17.875rem] flex-shrink-0 flex-col items-center rounded-2xl bg-gradient-to-br from-Neutral-700/30 to-Neutral-700/10 p-2 shadow-md backdrop-blur-xl md:w-[21.5rem] lg:w-[29.625rem] lg:p-3 xl:w-[35.375rem]`}
      >
        {/** card content wrapper */}
        <div
          className={`flex flex-col items-start gap-2 self-stretch lg:gap-3`}
        >
          {/** card image */}
          <div
            className={`h-[8rem] self-stretch rounded-2xl md:h-[9.75rem] lg:h-[13.25rem] xl:h-[17.5rem] ${
              bgID === 1
                ? `bg-event01`
                : bgID === 2
                  ? `bg-event02`
                  : bgID === 3
                    ? `bg-event03`
                    : bgID === 4
                      ? `bg-event04`
                      : bgID === 5
                        ? `bg-event05`
                        : bgID === 6
                          ? `bg-event06`
                          : bgID === 7
                            ? `bg-event07`
                            : bgID === 8
                              ? `bg-event08`
                              : bgID === 9
                                ? `bg-event09`
                                : `bg-event10`
            } bg-cover bg-no-repeat shadow-sm`}
          ></div>

          {/** card text content */}
          <div
            className={`flex flex-col items-start gap-4 self-stretch px-2 py-4 lg:gap-6 lg:px-4 lg:py-6`}
          >
            {/** heading + body text */}
            <div
              className={`flex flex-col items-start gap-1 self-stretch md:gap-2 lg:gap-2`}
            >
              {/** date */}
              <div className={`flex items-center gap-1 self-stretch`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`size-4 md:size-5 lg:size-6`}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.6667 2.66665H12V1.33331H10.6667V2.66665H5.33333V1.33331H4V2.66665H3.33333C2.59333 2.66665 2 3.26665 2 3.99998V13.3333C2 14.0666 2.59333 14.6666 3.33333 14.6666H12.6667C13.4 14.6666 14 14.0666 14 13.3333V3.99998C14 3.26665 13.4 2.66665 12.6667 2.66665ZM12.6667 13.3333H3.33333V5.99998H12.6667V13.3333ZM4.33333 8.66665C4.33333 7.74665 5.08 6.99998 6 6.99998C6.92 6.99998 7.66667 7.74665 7.66667 8.66665C7.66667 9.58665 6.92 10.3333 6 10.3333C5.08 10.3333 4.33333 9.58665 4.33333 8.66665Z"
                    fill="#DFE2E1"
                  />
                </svg>
                <p
                  className={`flex-1 font-body text-xs text-Neutral-200 md:text-sm lg:text-base xl:text-2xl`}
                >{`${startDate} - ${endDate}`}</p>
              </div>

              {/** title */}
              <h3
                className={`line-clamp-2 self-stretch text-ellipsis font-body text-lg font-bold text-Neutral-100 md:text-xl lg:text-3xl`}
              >
                {title}
              </h3>

              {/** description */}
              <p
                className={`line-clamp-4 self-stretch text-sm text-Neutral-300 md:text-base lg:text-xl`}
              >
                {description}
              </p>
            </div>

            {/** rules */}
            <div
              className={`flex items-start gap-2 self-stretch rounded-lg bg-gradient-to-br from-Neutral-600/30 to-Neutral-600/10 p-2 md:gap-3 md:p-3 lg:gap-4 lg:rounded-2xl lg:p-4 xl:gap-6 xl:p-6`}
            >
              <div className={`flex flex-1 flex-col items-start gap-3`}>
                <h4
                  className={`h-8 font-body text-xs font-semibold uppercase text-Neutral-100 md:text-sm lg:text-base`}
                >
                  Tournament Format
                </h4>

                <div className={`flex items-center gap-1 self-stretch`}>
                  {tournamentFormat === "Round Robin" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`size-4 md:size-5 lg:size-6`}
                    >
                      <path
                        d="M4.01582 4.72301C3.59649 4.97025 3.10139 5.05608 2.6233 4.96439C2.14522 4.8727 1.71699 4.6098 1.41889 4.22496C1.12078 3.84012 0.973265 3.35977 1.00399 2.87395C1.03472 2.38813 1.24157 1.93019 1.58579 1.58597C1.93 1.24176 2.38794 1.0349 2.87377 1.00417C3.35959 0.973448 3.83994 1.12096 4.22478 1.41907C4.60962 1.71718 4.87252 2.14541 4.96421 2.62349C5.05589 3.10157 4.97007 3.59668 4.72282 4.01601L6.98382 6.27601C7.29157 6.09446 7.64252 5.99913 7.99982 6.00001C8.36982 6.00001 8.71782 6.10101 9.01582 6.27701L11.2758 4.01601C11.0286 3.59668 10.9428 3.10157 11.0344 2.62349C11.1261 2.14541 11.389 1.71718 11.7739 1.41907C12.1587 1.12096 12.6391 0.973448 13.1249 1.00417C13.6107 1.0349 14.0686 1.24176 14.4129 1.58597C14.7571 1.93019 14.9639 2.38813 14.9947 2.87395C15.0254 3.35977 14.8779 3.84012 14.5798 4.22496C14.2817 4.6098 13.8534 4.8727 13.3753 4.96439C12.8973 5.05608 12.4022 4.97025 11.9828 4.72301L9.72282 6.98401C9.90507 7.29157 10.0012 7.6425 10.0012 8.00001C10.0012 8.35751 9.90507 8.70844 9.72282 9.01601L11.9838 11.276C12.4032 11.0288 12.8983 10.9429 13.3763 11.0346C13.8544 11.1263 14.2827 11.3892 14.5808 11.774C14.8789 12.1589 15.0264 12.6392 14.9957 13.1251C14.9649 13.6109 14.7581 14.0688 14.4139 14.413C14.0696 14.7573 13.6117 14.9641 13.1259 14.9948C12.6401 15.0256 12.1597 14.878 11.7749 14.5799C11.39 14.2818 11.1271 13.8536 11.0354 13.3755C10.9438 12.8974 11.0296 12.4023 11.2768 11.983L9.01582 9.72301C8.70817 9.9049 8.35722 10.0006 7.99982 10C7.64243 10.0006 7.29147 9.9049 6.98382 9.72301L4.72382 11.984C4.97107 12.4033 5.05689 12.8984 4.96521 13.3765C4.87352 13.8546 4.61062 14.2828 4.22578 14.5809C3.84094 14.879 3.36059 15.0266 2.87477 14.9958C2.38894 14.9651 1.931 14.7583 1.58679 14.414C1.24257 14.0698 1.03572 13.6119 1.00499 13.1261C0.974265 12.6402 1.12178 12.1599 1.41989 11.7751C1.71799 11.3902 2.14622 11.1273 2.6243 11.0356C3.10239 10.9439 3.59749 11.0298 4.01682 11.277L6.27682 9.01601C6.09493 8.70836 5.99925 8.3574 5.99982 8.00001C5.99982 7.63001 6.10082 7.28201 6.27682 6.98401L4.01582 4.72301Z"
                        fill="#DFE2E1"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      className={`size-4 md:size-5 lg:size-6`}
                    >
                      <path
                        d="M3.45823 16.3223V13.5063C1.96794 12.9897 0.966797 11.2549 0.966797 9.216C0.966797 8.00114 1.24108 6.73143 2.58965 6.73143H6.01023C6.31454 6.73171 6.60863 6.84128 6.83894 7.04018C7.06925 7.23908 7.22047 7.51408 7.26506 7.81511C7.30964 8.11614 7.24463 8.42316 7.08186 8.68029C6.91909 8.93741 6.66939 9.12752 6.37823 9.216L4.42394 9.80914C5.4228 9.80914 6.65023 10.7577 6.62394 11.9863M10.2171 16.3234V13.5063C10.2171 13.5063 10.8879 13.1714 11.5885 12.5006C12.9382 11.208 13.1142 9.16457 12.7497 7.33143C12.6274 6.72114 12.4525 6.10171 12.2045 5.58057M2.04908 6.648V4.49257C2.04908 4.04443 2.22711 3.61465 2.54399 3.29776C2.86087 2.98088 3.29066 2.80286 3.7388 2.80286C4.18694 2.80286 4.61672 2.98088 4.93361 3.29776C5.25049 3.61465 5.42851 4.04443 5.42851 4.49257V6.648"
                        stroke="#DFE2E1"
                        stroke-width="1.71429"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.42831 6.20459V3.36802C5.42244 3.14228 5.46183 2.91764 5.54417 2.70736C5.6265 2.49709 5.75011 2.30542 5.9077 2.14368C6.06529 1.98194 6.25367 1.85339 6.46174 1.76562C6.66981 1.67785 6.89334 1.63263 7.11916 1.63263C7.34498 1.63263 7.56852 1.67785 7.77659 1.76562C7.98465 1.85339 8.17304 1.98194 8.33063 2.14368C8.48822 2.30542 8.61183 2.49709 8.69416 2.70736C8.7765 2.91764 8.81589 3.14228 8.81002 3.36802V6.20459C8.80958 6.63013 8.64876 7.03988 8.35962 7.3521C8.07048 7.66433 7.67428 7.8561 7.25002 7.88916"
                        stroke="#DFE2E1"
                        stroke-width="1.71429"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.81014 4.49375C8.80427 4.26816 8.84364 4.04368 8.92592 3.83354C9.0082 3.6234 9.13172 3.43187 9.28921 3.27023C9.44669 3.1086 9.63495 2.98014 9.84287 2.89242C10.0508 2.80471 10.2742 2.75952 10.4999 2.75952C10.7255 2.75952 10.9489 2.80471 11.1568 2.89242C11.3648 2.98014 11.553 3.1086 11.7105 3.27023C11.868 3.43187 11.9915 3.6234 12.0738 3.83354C12.1561 4.04368 12.1954 4.26816 12.1896 4.49375V5.94518C12.1954 6.17078 12.1561 6.39526 12.0738 6.6054C11.9915 6.81554 11.868 7.00707 11.7105 7.1687C11.553 7.33034 11.3648 7.4588 11.1568 7.54651C10.9489 7.63423 10.7255 7.67942 10.4999 7.67942C10.2742 7.67942 10.0508 7.63423 9.84287 7.54651C9.63495 7.4588 9.44669 7.33034 9.28921 7.1687C9.13172 7.00707 9.0082 6.81554 8.92592 6.6054C8.84364 6.39526 8.80427 6.17078 8.81014 5.94518V4.49375Z"
                        stroke="#DFE2E1"
                        stroke-width="1.71429"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  <p
                    className={`flex-1 font-body text-xs text-Neutral-200 md:text-sm lg:text-base`}
                  >
                    {tournamentFormat}
                  </p>
                </div>

                <div className={`flex items-center gap-1 self-stretch`}>
                  {duelMode === "Solo" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`size-4 md:size-5 lg:size-6`}
                    >
                      <path
                        d="M8.00033 2.66666C8.70757 2.66666 9.38585 2.94761 9.88594 3.4477C10.386 3.9478 10.667 4.62608 10.667 5.33332C10.667 6.04057 10.386 6.71884 9.88594 7.21894C9.38585 7.71904 8.70757 7.99999 8.00033 7.99999C7.29308 7.99999 6.6148 7.71904 6.11471 7.21894C5.61461 6.71884 5.33366 6.04057 5.33366 5.33332C5.33366 4.62608 5.61461 3.9478 6.11471 3.4477C6.6148 2.94761 7.29308 2.66666 8.00033 2.66666ZM8.00033 9.33332C10.947 9.33332 13.3337 10.5267 13.3337 12V13.3333H2.66699V12C2.66699 10.5267 5.05366 9.33332 8.00033 9.33332Z"
                        fill="#DFE2E1"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`size-4 md:size-5 lg:size-6`}
                    >
                      <path
                        d="M10.6663 11.3333V12.6667H1.33301V11.3333C1.33301 11.3333 1.33301 8.66666 5.99967 8.66666C10.6663 8.66666 10.6663 11.3333 10.6663 11.3333ZM8.33301 5C8.33301 4.53851 8.19616 4.08738 7.93977 3.70367C7.68338 3.31995 7.31896 3.02088 6.8926 2.84428C6.46624 2.66767 5.99709 2.62147 5.54446 2.7115C5.09184 2.80153 4.67608 3.02376 4.34976 3.35008C4.02344 3.6764 3.80121 4.09217 3.71118 4.54479C3.62114 4.99741 3.66735 5.46656 3.84396 5.89293C4.02056 6.31929 4.31963 6.6837 4.70334 6.94009C5.08706 7.19648 5.53818 7.33333 5.99967 7.33333C6.61851 7.33333 7.21201 7.0875 7.64959 6.64991C8.08718 6.21233 8.33301 5.61884 8.33301 5ZM10.6263 8.66666C11.0362 8.98383 11.3715 9.38695 11.6088 9.84767C11.8461 10.3084 11.9795 10.8155 11.9997 11.3333V12.6667H14.6663V11.3333C14.6663 11.3333 14.6663 8.91333 10.6263 8.66666ZM9.99967 2.66666C9.5408 2.66411 9.09202 2.8013 8.71301 3.06C9.11797 3.62582 9.33571 4.30419 9.33571 5C9.33571 5.69581 9.11797 6.37417 8.71301 6.94C9.09202 7.19869 9.5408 7.33589 9.99967 7.33333C10.6185 7.33333 11.212 7.0875 11.6496 6.64991C12.0872 6.21233 12.333 5.61884 12.333 5C12.333 4.38116 12.0872 3.78767 11.6496 3.35008C11.212 2.9125 10.6185 2.66666 9.99967 2.66666Z"
                        fill="#DFE2E1"
                      />
                    </svg>
                  )}
                  <p
                    className={`flex-1 font-body text-xs text-Neutral-200 md:text-sm lg:text-base`}
                  >
                    {duelMode}
                  </p>
                </div>

                {isRewarded ? (
                  <div className={`flex items-center gap-1 self-stretch`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`size-4 md:size-5 lg:size-6`}
                    >
                      <path
                        d="M8 7.33333C8.36667 7.33333 8.68067 7.20289 8.942 6.942C9.20333 6.68111 9.33378 6.36711 9.33333 6C9.33333 5.63333 9.20289 5.31956 8.942 5.05867C8.68111 4.79778 8.36711 4.66711 8 4.66667C7.63333 4.66667 7.31956 4.79733 7.05867 5.05867C6.79778 5.32 6.66711 5.63378 6.66667 6C6.66667 6.36667 6.79733 6.68067 7.05867 6.942C7.32 7.20333 7.63378 7.33378 8 7.33333ZM4.66667 14V12.6667H7.33333V10.6C6.78889 10.4778 6.30289 10.2473 5.87533 9.90867C5.44778 9.57 5.13378 9.14489 4.93333 8.63333C4.1 8.53333 3.40289 8.16956 2.842 7.542C2.28111 6.91444 2.00044 6.17822 2 5.33333V4.66667C2 4.3 2.13067 3.98622 2.392 3.72533C2.65333 3.46444 2.96711 3.33378 3.33333 3.33333H4.66667V2H11.3333V3.33333H12.6667C13.0333 3.33333 13.3473 3.464 13.6087 3.72533C13.87 3.98667 14.0004 4.30044 14 4.66667V5.33333C14 6.17778 13.7193 6.914 13.158 7.542C12.5967 8.17 11.8996 8.53378 11.0667 8.63333C10.8667 9.14444 10.5529 9.56956 10.1253 9.90867C9.69778 10.2478 9.21156 10.4782 8.66667 10.6V12.6667H11.3333V14H4.66667ZM4.66667 7.2V4.66667H3.33333V5.33333C3.33333 5.75556 3.45556 6.13622 3.7 6.47533C3.94444 6.81445 4.26667 7.056 4.66667 7.2ZM8 9.33333C8.55556 9.33333 9.02778 9.13889 9.41667 8.75C9.80555 8.36111 10 7.88889 10 7.33333V3.33333H6V7.33333C6 7.88889 6.19444 8.36111 6.58333 8.75C6.97222 9.13889 7.44444 9.33333 8 9.33333ZM11.3333 7.2C11.7333 7.05556 12.0556 6.81378 12.3 6.47467C12.5444 6.13556 12.6667 5.75511 12.6667 5.33333V4.66667H11.3333V7.2Z"
                        fill="#DFE2E1"
                      />
                    </svg>
                    <p
                      className={`flex-1 font-body text-xs text-Neutral-200 md:text-sm lg:text-base`}
                    >
                      Reward
                    </p>
                  </div>
                ) : null}
              </div>

              <div className={`flex flex-1 flex-col items-start gap-3`}>
                <h4
                  className={`h-8 font-body text-xs font-semibold uppercase text-Neutral-100 md:text-sm lg:text-base`}
                >
                  Duel Rules
                </h4>

                {twoWinsInThree ? (
                  <div className={`flex items-center gap-1 self-stretch`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`size-4 md:size-5 lg:size-6`}
                    >
                      <path
                        d="M3.99967 8.00001C3.99967 8.35363 3.8592 8.69277 3.60915 8.94282C3.3591 9.19287 3.01996 9.33334 2.66634 9.33334C2.31272 9.33334 1.97358 9.19287 1.72353 8.94282C1.47348 8.69277 1.33301 8.35363 1.33301 8.00001C1.33301 7.64639 1.47348 7.30725 1.72353 7.0572C1.97358 6.80715 2.31272 6.66668 2.66634 6.66668C3.01996 6.66668 3.3591 6.80715 3.60915 7.0572C3.8592 7.30725 3.99967 7.64639 3.99967 8.00001ZM3.99967 8.00001H5.99967C6.17649 8.00001 6.34605 8.07025 6.47108 8.19527C6.5961 8.3203 6.66634 8.48987 6.66634 8.66668V12.6667C6.66634 12.8435 6.5961 13.0131 6.47108 13.1381C6.34605 13.2631 6.17649 13.3333 5.99967 13.3333H3.99967M3.99967 13.3333C3.99967 13.687 3.8592 14.0261 3.60915 14.2762C3.3591 14.5262 3.01996 14.6667 2.66634 14.6667C2.31272 14.6667 1.97358 14.5262 1.72353 14.2762C1.47348 14.0261 1.33301 13.687 1.33301 13.3333C1.33301 12.9797 1.47348 12.6406 1.72353 12.3905C1.97358 12.1405 2.31272 12 2.66634 12C3.01996 12 3.3591 12.1405 3.60915 12.3905C3.8592 12.6406 3.99967 12.9797 3.99967 13.3333ZM1.33301 2.66668C1.33301 3.0203 1.47348 3.35944 1.72353 3.60949C1.97358 3.85953 2.31272 4.00001 2.66634 4.00001C3.01996 4.00001 3.3591 3.85953 3.60915 3.60949C3.8592 3.35944 3.99967 3.0203 3.99967 2.66668C3.99967 2.31305 3.8592 1.97392 3.60915 1.72387C3.3591 1.47382 3.01996 1.33334 2.66634 1.33334C2.31272 1.33334 1.97358 1.47382 1.72353 1.72387C1.47348 1.97392 1.33301 2.31305 1.33301 2.66668ZM11.9997 6.66668C11.9997 7.0203 12.1402 7.35944 12.3902 7.60949C12.6402 7.85953 12.9794 8.00001 13.333 8.00001C13.6866 8.00001 14.0258 7.85953 14.2758 7.60949C14.5259 7.35944 14.6663 7.0203 14.6663 6.66668C14.6663 6.31305 14.5259 5.97392 14.2758 5.72387C14.0258 5.47382 13.6866 5.33334 13.333 5.33334C12.9794 5.33334 12.6402 5.47382 12.3902 5.72387C12.1402 5.97392 11.9997 6.31305 11.9997 6.66668Z"
                        stroke="#DFE2E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 2.66669H8.66667C8.84348 2.66669 9.01305 2.73693 9.13807 2.86195C9.2631 2.98697 9.33333 3.15654 9.33333 3.33335V10C9.33333 10.1768 9.2631 10.3464 9.13807 10.4714C9.01305 10.5964 8.84348 10.6667 8.66667 10.6667H7.33333M9.33333 6.66669H12"
                        stroke="#DFE2E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p
                      className={`flex-1 font-body text-xs text-Neutral-200 md:text-sm lg:text-base`}
                    >
                      2 Wins In 2 Duels
                    </p>
                  </div>
                ) : null}

                {balancedMode ? (
                  <div className={`flex items-center gap-1 self-stretch`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`size-4 md:size-5 lg:size-6`}
                    >
                      <path
                        d="M8.66634 5.22004C9.23301 5.02004 9.68634 4.56671 9.88634 4.00004H11.9997L9.99967 8.66671C9.99967 9.77337 11.0463 10.6667 12.333 10.6667C13.6197 10.6667 14.6663 9.77337 14.6663 8.66671L12.6663 4.00004H13.9997V2.66671H9.88634C9.61301 1.88671 8.87301 1.33337 7.99967 1.33337C7.12634 1.33337 6.38634 1.88671 6.11301 2.66671H1.99967V4.00004H3.33301L1.33301 8.66671C1.33301 9.77337 2.37967 10.6667 3.66634 10.6667C4.95301 10.6667 5.99967 9.77337 5.99967 8.66671L3.99967 4.00004H6.11301C6.31301 4.56671 6.76634 5.02004 7.33301 5.22004V12.6667H1.33301V14H14.6663V12.6667H8.66634V5.22004ZM13.5797 8.66671H11.0863L12.333 5.76004L13.5797 8.66671ZM4.91301 8.66671H2.41967L3.66634 5.76004L4.91301 8.66671ZM7.99967 4.00004C7.63301 4.00004 7.33301 3.70004 7.33301 3.33337C7.33301 2.96671 7.63301 2.66671 7.99967 2.66671C8.36634 2.66671 8.66634 2.96671 8.66634 3.33337C8.66634 3.70004 8.36634 4.00004 7.99967 4.00004Z"
                        fill="#DFE2E1"
                      />
                    </svg>
                    <p
                      className={`flex-1 font-body text-xs text-Neutral-200 md:text-sm lg:text-base`}
                    >
                      Balanced Mode
                    </p>
                  </div>
                ) : null}

                {echoBan ? (
                  <div className={`flex items-center gap-1 self-stretch`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`size-4 md:size-5 lg:size-6`}
                    >
                      <path
                        d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 6.60938 2.67656 5.33125 3.49219 4.33125L11.6687 12.5078C10.6687 13.3234 9.39062 13.8125 8 13.8125ZM12.5078 11.6687L4.33125 3.49219C5.33125 2.67656 6.60938 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 9.39062 13.3234 10.6687 12.5078 11.6687Z"
                        fill="#DFE2E1"
                      />
                    </svg>
                    <p
                      className={`flex-1 font-body text-xs text-Neutral-200 md:text-sm lg:text-base`}
                    >
                      Echo Ban
                    </p>
                  </div>
                ) : null}

                {cardBan ? (
                  <div className={`flex items-center gap-1 self-stretch`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`size-4 md:size-5 lg:size-6`}
                    >
                      <path
                        d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 6.60938 2.67656 5.33125 3.49219 4.33125L11.6687 12.5078C10.6687 13.3234 9.39062 13.8125 8 13.8125ZM12.5078 11.6687L4.33125 3.49219C5.33125 2.67656 6.60938 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 9.39062 13.3234 10.6687 12.5078 11.6687Z"
                        fill="#DFE2E1"
                      />
                    </svg>
                    <p
                      className={`flex-1 font-body text-xs text-Neutral-200 md:text-sm lg:text-base`}
                    >
                      Card Ban
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            {/** button */}
            {includeAction ? (
              <div
                className={`flex flex-col items-start gap-2 self-stretch pt-4`}
              >
                <Button
                  variant="primary"
                  onClick={onClick}
                  className={`self-stretch`}
                >
                  {buttonLabel}
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
