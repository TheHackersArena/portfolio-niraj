
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PdfViewer = () => {
  const { pdfName } = useParams();
  const navigate = useNavigate();
  const [pdfTitle, setPdfTitle] = useState('');
  const [pdfPath, setPdfPath] = useState('');

  useEffect(() => {
    if (!pdfName) {
      navigate('/projects');
      return;
    }

    // Map PDF names to their paths and titles
    const pdfMap: Record<string, { path: string; title: string }> = {
      'icici-lombard': { 
        path: '/ICICI_Lombard.pdf',
        title: 'ICICI Lombard - Health Insurance Digital Experience'
      },
      'inbooks': { 
        path: '/Inbooks.pdf',
        title: 'Inbooks - AI-Powered Book Discovery Platform'
      },
      'neo-bank-fibe': { 
        path: '/Neo_Bank_Fibe.pdf',
        title: 'Neo Bank (Fibe) - Payroll & Expense Automation for Startups'
      },
      'netflix': { 
        path: '/NETFLIX.pdf',
        title: 'Netflix - Social Content Discovery & UX Research'
      },
      'pac-man-services': { 
        path: '/Pac-Man-Services.pdf',
        title: 'Pac-Man Services - Gamezone Ops Management SaaS'
      }
    };

    const pdfInfo = pdfMap[pdfName];
    if (pdfInfo) {
      setPdfPath(pdfInfo.path);
      setPdfTitle(pdfInfo.title);
    } else {
      navigate('/projects');
    }
  }, [pdfName, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="section-container py-8"
    >
      <div className="mb-6 flex items-center">
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center text-primary hover:text-primary/80 mr-4"
          aria-label="Back to projects"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
        <h1 className="text-2xl md:text-3xl font-bold">{pdfTitle}</h1>
      </div>
      
      <div className="w-full rounded-lg overflow-hidden border border-border bg-card shadow-sm">
        {pdfPath && (
          <div className="w-full h-[calc(100vh-200px)] md:h-[calc(100vh-250px)]">
            <iframe 
              src={pdfPath}
              className="w-full h-full" 
              title={pdfTitle}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PdfViewer;
