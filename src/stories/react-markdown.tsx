// * show the use of react markdown
import React from 'react';

interface ReactMarkdownProps {
  primary?: boolean;
  onClick?: () => void;
}

export const ReactMarkdown = ({
  primary = false,
  ...props
}: ReactMarkdownProps) => {

  const text = (`North Lake Tahoe has 3 main downtown areas across 2 states, and all of them do a great job of turning up the Christmas cheer each holiday season. Tahoe City Downtown Association lights up the whole downtown with merchant’s competing for best dressed windows.  There’s even a 120’ Christmas Tree!  Check the [Christmas Calendar](https://visittahoecity.org/category/christmas/) for each year’s events.

Sliding over to Kings Beach, The North Tahoe Events Center is the focal point of the proceedings.  100’ Christmas Trees right on the beach, with gorgeous Lake Tahoe as a backdrop is pretty hard to beat.  The Christmas installation at the event center seems to get better every year, with the tree lighting on a Friday in Early December.  Get photos with the Clauses, enjoy gingerbread cookies and hot cocoa.  There’s a craft station, and musical performances by the North Lake Tahoe Boys and Girls Club, the North Tahoe Jazz Band and Tahoe Expedition Academy.  Check the calendar here. Over in Incline Village, there is the community run Northern Lights Festival. A true grassroots organization, they do a great job putting together events and supporting local businesses. Finally, don’t forget about the resorts. Palisades Tahoe goes all out with carolers, Santa, sleigh rides, train rides, and concerts all of Christmas week, capping off in a torchlight parade and fireworks show on New Year’s eve. The events calendar is here.

Interested in contributing to the holiday spirit without all the hassle?  Sierra Lighting is THE local holiday lighting installation company with a full time team based right in North Lake Tahoe.  We can take care of all of your Christmas decoration needs, be it the smallest project out there or giant trees like the ones downtown. In the warmer months we specialize in bespoke lighting for North Lake Tahoe Weddings and Events.`);

  return (
    <div
      {...props}
    > <p>{text}</p>

      <hr />

      <p className="react-markdown">{text}</p>
    </div>
  );
};