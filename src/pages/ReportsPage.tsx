import { OverflowBreadcrumbs, PageHeader, StatusIndicator } from '@diligentcorp/atlas-react-bundle';
import { Button, Container, Link as MuiLink, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router';

const REPORTS = [
  {
    title: 'Q1 2026 — Connected Compliance Report',
    scope: 'Speak Up · Policy Manager · Training',
    date: '19 March 2026',
    status: 'Deteriorating',
    statusColor: 'error' as const,
    to: '/reports/q1-2026',
  },
  {
    title: 'Q4 2025 — Connected Compliance Report',
    scope: 'Speak Up · Policy Manager · Training',
    date: '21 December 2025',
    status: 'Stable',
    statusColor: 'success' as const,
    to: null,
  },
  {
    title: 'Q3 2025 — Connected Compliance Report',
    scope: 'Speak Up · Policy Manager · Training',
    date: '22 September 2025',
    status: 'Stable',
    statusColor: 'success' as const,
    to: null,
  },
  {
    title: 'Q2 2025 — Connected Compliance Report',
    scope: 'Speak Up · Policy Manager · Training',
    date: '23 June 2025',
    status: 'Improving',
    statusColor: 'information' as const,
    to: null,
  },
  {
    title: 'Q1 2025 — Connected Compliance Report',
    scope: 'Speak Up · Policy Manager · Training',
    date: '24 March 2025',
    status: 'Stable',
    statusColor: 'success' as const,
    to: null,
  },
];

export default function ReportsPage() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 3 }}>
      <Stack gap={3}>
        <PageHeader
          pageTitle="Reports"
          pageSubtitle="Generated compliance reports across all connected products"
          breadcrumbs={
            <OverflowBreadcrumbs
              leadingElement={<NavLink to="/connected-compliance">Connected Compliance</NavLink>}
              items={[{ id: 'reports', label: 'Reports', url: '/reports' }]}
              hideLastItem
              aria-label="Breadcrumbs"
            >
              {({ label, url }) => <NavLink to={url}>{label}</NavLink>}
            </OverflowBreadcrumbs>
          }
          actions={
            <Button variant="contained" onClick={() => navigate('/reports/q1-2026')}>
              Create report
            </Button>
          }
        />

        <Table size="small" sx={{ '& .MuiTableCell-root': { borderColor: 'divider', py: '10px', px: '12px' } }}>
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.100' }}>
              {['Report', 'Scope', 'Generated', 'Status'].map((h) => (
                <TableCell key={h} sx={{ fontWeight: 600 }}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {REPORTS.map(({ title, scope, date, status, statusColor, to }) => (
              <TableRow key={title} hover={!!to} sx={{ opacity: to ? 1 : 0.5 }}>
                <TableCell>
                  {to ? (
                    <MuiLink component="button" underline="hover" onClick={() => navigate(to)} sx={{ textAlign: 'left' }}>
                      <Typography variant="labelSm">{title}</Typography>
                    </MuiLink>
                  ) : (
                    <Typography variant="labelSm">{title}</Typography>
                  )}
                </TableCell>
                <TableCell>
                  <Typography variant="textSm" color="text.secondary">{scope}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="textSm" color="text.secondary">{date}</Typography>
                </TableCell>
                <TableCell>
                  <StatusIndicator label={status} color={statusColor} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </Container>
  );
}
