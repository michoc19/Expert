import React from 'react';
import { faqs } from './../../assets/data/faqs';
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <div className="p-4 lg:p-8 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-headingColor">Frequently Asked Questions</h1>
      <ul className="mt-[38px]">
        {faqs.map((item, index) => (
          <FaqItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default FaqList;
