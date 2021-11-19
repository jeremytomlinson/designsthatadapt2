// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cWxJnkpDqV5Dir3LuN8T7J
// Component: dL6qk6KtEtIc
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: qSeAbp0kIsSm/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: btwHc1KiU8Wp/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_designs_that_adapt.module.css"; // plasmic-import: cWxJnkpDqV5Dir3LuN8T7J/projectcss
import * as sty from "./PlasmicCallToActionSection.module.css"; // plasmic-import: dL6qk6KtEtIc/css
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: XekEnK6wp2u6/icon

export const PlasmicCallToActionSection__VariantProps = new Array();

export const PlasmicCallToActionSection__ArgProps = new Array(
  "image",
  "children"
);

function PlasmicCallToActionSection__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <div
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.freeBox___3FQew
        )}
      >
        <div
          data-plasmic-name={"art"}
          data-plasmic-override={overrides.art}
          className={classNames(defaultcss.all, projectcss.all, sty.art)}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={
              args.image !== undefined
                ? args.image
                : {
                    src: "/plasmic/designs_that_adapt/images/meeting.jpeg",
                    fullWidth: 2916,
                    fullHeight: 1787,
                    aspectRatio: undefined
                  }
            }
          />

          {true ? (
            <div
              data-plasmic-name={"blend"}
              data-plasmic-override={overrides.blend}
              className={classNames(defaultcss.all, projectcss.all, sty.blend)}
            />
          ) : null}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__alK
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__vAeJ
            )}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"copy"}
              data-plasmic-override={overrides.copy}
              hasGap={true}
              className={classNames(defaultcss.all, projectcss.all, sty.copy)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox__wVmcc
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__pAgVe
                        )}
                      >
                        {"Welcome"}
                      </div>

                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__uUZnZ
                        )}
                      >
                        {"Let's get going"}
                      </div>

                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__bZ7RD
                        )}
                      >
                        {
                          "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                        }
                      </div>
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox___206ZU
                      )}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__xsoaj
                        )}
                        color={"blue"}
                        endIcon={
                          <ChevronRightIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__z7TjJ
                            )}
                            role={"img"}
                          />
                        }
                        showEndIcon={"showEndIcon"}
                      >
                        {"Start now"}
                      </Button>

                      <Button
                        bgDifference={"bgDifference"}
                        className={classNames(
                          "__wab_instance",
                          sty.button__oreQe
                        )}
                      >
                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            defaultcss.__wab_text,
                            sty.text__dsnUr
                          )}
                        >
                          {"Learn more…"}
                        </div>
                      </Button>
                    </p.Stack>
                  </React.Fragment>
                ),

                value: args.children
              })}
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "art", "img", "blend", "copy"],
  art: ["art", "img", "blend"],
  img: ["img"],
  blend: ["blend"],
  copy: ["copy"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCallToActionSection__ArgProps,
      internalVariantPropNames: PlasmicCallToActionSection__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCallToActionSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCallToActionSection";
  } else {
    func.displayName = `PlasmicCallToActionSection.${nodeName}`;
  }
  return func;
}

export const PlasmicCallToActionSection = Object.assign(
  // Top-level PlasmicCallToActionSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    art: makeNodeComponent("art"),
    img: makeNodeComponent("img"),
    blend: makeNodeComponent("blend"),
    copy: makeNodeComponent("copy"),
    // Metadata about props expected for PlasmicCallToActionSection
    internalVariantProps: PlasmicCallToActionSection__VariantProps,
    internalArgProps: PlasmicCallToActionSection__ArgProps
  }
);

export default PlasmicCallToActionSection;
/* prettier-ignore-end */
