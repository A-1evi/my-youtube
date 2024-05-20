import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const CommetsContainer = () => {
  const commentData = [
    {
      name: "Alankar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
      replies: [
        {
          name: "Alankar",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
          replies: [
            {
              name: "Alankar",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
              replies: [
                {
                  name: "Alankar",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
                  replies: [
                    {
                      name: "Alankar",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
                      replies: [
                        {
                          name: "Alankar",
                          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
                          replies: [
                            {
                              name: "Alankar",
                              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
                              replies: [
                                {
                                  name: "Alankar",
                                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
                                  replies: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Alankar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
      replies: [
        {
          name: "Alankar",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
          replies: [
            {
              name: "Alankar",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Alankar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
      replies: [
        {
          name: "Alankar",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
          replies: [],
        },
      ],
    },
    {
      name: "Alankar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
      replies: [
        {
          name: "Alankar",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
          replies: [
            {
              name: "Alankar",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Alankar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis elit.",
      replies: [],
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-xl">Comments:</h1>{" "}
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommetsContainer;
