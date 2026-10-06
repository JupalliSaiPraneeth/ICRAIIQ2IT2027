import React from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

import { conferenceData } from '../data/conferenceData';

export const ImportantDatesPage = () => {
  return (
    <div className="min-h-screen bg-white pb-20 pt-20 text-slate-800">

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* =========================================================
            PAGE HEADER
        ========================================================= */}
        <section className="mb-9 text-center">

          <h1
            className="
              text-4xl
              font-extrabold
              tracking-[-0.035em]
              text-[#17213B]
              sm:text-5xl
              lg:text-[54px]
              lg:leading-[1.08]
            "
          >
            Important Dates & Timeline
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-sm
              leading-6
              text-slate-500
              sm:text-base
              sm:leading-7
            "
          >
            Track key conference milestones from initial manuscript
            submission to the conference.
          </p>

          {/* Small divider in #e47c14 */}
          <div
            className="
              mx-auto
              mt-6
              h-1
              w-16
              rounded-full
              bg-gradient-to-r
              from-[#e47c14]
              to-[#c7650b]
            "
          />

        </section>


        {/* =========================================================
            CONFERENCE INFORMATION BAR
        ========================================================= */}
        <section
          className="
            relative
            mb-10
            overflow-hidden
            rounded-2xl
            border
            border-[#e47c14]/30
            bg-white
            shadow-[0_8px_28px_rgba(15,23,42,0.06)]
          "
        >

          {/* Top #e47c14 accent */}
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[3px]
              bg-gradient-to-r
              from-[#e47c14]
              via-[#f59e38]
              to-[#e47c14]
            "
          />

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-5
              px-5
              py-5
              sm:flex-row
              sm:px-7
            "
          >

            {/* Conference information */}
            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#fff8f0]
                  text-[#e47c14]
                "
              >
                <Clock className="h-5 w-5" />
              </div>

              <div>

                <div
                  className="
                    text-sm
                    font-bold
                    text-[#17213B]
                    sm:text-base
                  "
                >
                  Conference Dates:{' '}
                  <span className="text-[#e47c14]">
                    {conferenceData.dates.conference}
                  </span>
                </div>

                <div className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Manuscript Submission Deadline:{' '}
                  <span className="font-bold text-[#e47c14]">
                    {conferenceData.dates.submissionDeadline}
                  </span>
                </div>

              </div>

            </div>


            {/* Submit button */}
            <a
              href="/call-for-papers"
              className="
                group
                inline-flex
                min-h-11
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#e47c14]
                px-5
                text-xs
                font-extrabold
                uppercase
                tracking-[0.07em]
                text-white
                shadow-[0_6px_16px_rgba(228,124,20,0.22)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#c7650b]
                hover:shadow-[0_9px_22px_rgba(199,101,11,0.30)]
              "
            >
              Submit Manuscript

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>
        </section>


        {/* =========================================================
            ROADMAP
        ========================================================= */}
        <section className="relative">

          {/* DESKTOP CENTER LINE */}
          <div
            className="
              absolute
              bottom-8
              left-1/2
              top-8
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-[#e47c14]
              via-[#e47c14]/30
              to-[#e47c14]
              md:block
            "
          />

          {/* MOBILE LINE */}
          <div
            className="
              absolute
              bottom-8
              left-[20px]
              top-8
              w-px
              bg-gradient-to-b
              from-[#e47c14]
              via-[#e47c14]/30
              to-[#e47c14]
              md:hidden
            "
          />


          {/* TIMELINE ITEMS */}
          <div className="space-y-7 md:space-y-8">

            {conferenceData.importantDatesList.map((item, idx) => {

              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative md:min-h-[142px]"
                >

                  {/* DESKTOP CARD */}
                  <div
                    className={`
                      hidden
                      md:flex
                      md:w-[calc(50%-38px)]
                      ${isLeft
                        ? 'mr-auto justify-end'
                        : 'ml-auto justify-start'
                      }
                    `}
                  >

                    <TimelineCard
                      item={item}
                      index={idx}
                    />

                  </div>


                  {/* CENTER NODE */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-20
                      hidden
                      h-11
                      w-11
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-[3px]
                      border-white
                      bg-[#e47c14]
                      text-white
                      shadow-[0_0_0_1px_#e47c14,0_5px_16px_rgba(228,124,20,0.28)]
                      md:flex
                    "
                  >
                    <Calendar className="h-[17px] w-[17px]" />
                  </div>


                  {/* MOBILE NODE */}
                  <div
                    className="
                      absolute
                      left-[20px]
                      top-7
                      z-20
                      flex
                      h-10
                      w-10
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-[3px]
                      border-white
                      bg-[#e47c14]
                      text-white
                      shadow-[0_0_0_1px_#e47c14,0_4px_12px_rgba(228,124,20,0.25)]
                      md:hidden
                    "
                  >
                    <Calendar className="h-4 w-4" />
                  </div>


                  {/* MOBILE CARD */}
                  <div className="ml-12 md:hidden">

                    <TimelineCard
                      item={item}
                      index={idx}
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </section>


        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <section
          className="
            mt-11
            rounded-2xl
            border
            border-slate-200
            bg-[#FAFBFC]
            px-6
            py-7
            text-center
            shadow-[0_5px_20px_rgba(15,23,42,0.035)]
            sm:px-8
          "
        >

          <div
            className="
              mx-auto
              mb-3
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#fff8f0]
              text-[#e47c14]
            "
          >
            <Calendar className="h-[18px] w-[18px]" />
          </div>

          <h2
            className="
              text-lg
              font-extrabold
              tracking-tight
              text-[#17213B]
            "
          >
            Keep Track of Important Deadlines
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-slate-500
            "
          >
            Plan your manuscript submission, registration and conference
            participation according to the official schedule.
          </p>

          <a
            href="/call-for-papers"
            className="
              group
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#e47c14]
              px-5
              py-2.5
              text-xs
              font-extrabold
              uppercase
              tracking-[0.07em]
              text-white
              shadow-[0_5px_14px_rgba(228,124,20,0.20)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#c7650b]
            "
          >
            View Submission Guidelines

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>

        </section>

      </div>
    </div>
  );
};


/* ===============================================================
   TIMELINE CARD COMPONENT
================================================================ */

const TimelineCard = ({ item, index }) => {

  const isHighlighted = item.highlight;

  return (
    <article
      className="
        group
        relative
        w-full
        max-w-[570px]
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        py-4
        shadow-[0_5px_20px_rgba(15,23,42,0.045)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#e47c14]/40
        hover:shadow-[0_12px_28px_rgba(228,124,20,0.12)]
      "
    >

      {/* Left accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          top-0
          w-[3px]
          origin-bottom
          scale-y-0
          bg-gradient-to-b
          from-[#e47c14]
          to-[#c7650b]
          transition-transform
          duration-300
          group-hover:scale-y-100
        "
      />


      {/* CARD HEADER */}
      <div
        className="
          mb-3
          flex
          flex-wrap
          items-center
          justify-between
          gap-2
        "
      >

        {/* Status */}
        <div className="flex items-center gap-2">

          {isHighlighted ? (
            <CheckCircle2
              className="h-4 w-4 text-[#e47c14]"
            />
          ) : (
            <CheckCircle2
              className="h-4 w-4 text-slate-300"
            />
          )}

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.08em]

              ${isHighlighted
                ? `
                    border
                    border-[#e47c14]/30
                    bg-[#fff8f0]
                    text-[#e47c14]
                  `
                : `
                    border
                    border-slate-200
                    bg-slate-50
                    text-slate-500
                  `
              }
            `}
          >
            {item.status}
          </span>

        </div>


        {/* Date */}
        <span
          className="
            rounded-full
            bg-[#fff8f0]
            px-3
            py-1
            text-[10px]
            font-bold
            text-[#e47c14]
          "
        >
          {item.date}
        </span>

      </div>


      {/* TITLE */}
      <h3
        className="
          text-[17px]
          font-extrabold
          leading-snug
          tracking-[-0.01em]
          text-[#17213B]
          transition-colors
          duration-300
          group-hover:text-[#e47c14]
        "
      >
        {item.title}
      </h3>


      {/* DESCRIPTION */}
      <p
        className="
          mt-1.5
          text-[13px]
          leading-5
          text-slate-500
        "
      >
        {item.description}
      </p>


      {/* Bottom hover line */}
      <div
        className="
          mt-3
          h-[2px]
          w-0
          rounded-full
          bg-[#e47c14]
          transition-all
          duration-500
          group-hover:w-12
        "
      />

    </article>
  );
};


export default ImportantDatesPage;