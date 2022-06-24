import React from 'react';
import FrameWithGraphs from '../components/FrameWithGraphs';

export default function FieldsOfStudy() {
  const columns = [
    { field: '_id' },
    { field: 'fieldsOfStudy', headerName: 'Field of Study', width: 200 },
    { field: 'yearPublishedFirst', headerName: 'First', width: 80 },
    { field: 'yearPublishedLast', headerName: 'Last', width: 80 },
    { field: 'papersCount', headerName: 'Papers' },
    { field: 'inCitationsCount', headerName: 'Citations', width: 110 },
    { field: 'inCitationsPerPaper', headerName: 'Citations/Paper', width: 150 },
  ];

  return <FrameWithGraphs route={'fields'} columns={columns} yDimension={'fields of study'} />;
}
